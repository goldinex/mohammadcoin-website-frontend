'use client';

import React, { useMemo, useState, memo } from 'react';
import { useGetProductsQuery } from '@/src/redux/api/authApiSlice';
import { useRouter } from 'next/navigation';
import { IoRefreshOutline } from 'react-icons/io5';

type Product = {
  product_id: number;
  category: string;
  name_fa: string;
  latest_buy_price: number;
  latest_sell_price: number;
  is_special_price?: boolean;
  is_active?: boolean;
  buy_price_change_percent?: number;
  shamsi_updated_at?: string;
};

const imageMap: Record<string, string> = {
  seke: '/img/seke.png',
  parsian: '/img/parsian.svg',
  azadi: '/img/azadi.png',
  milad: '/img/milad.png',
  roz: '/img/roz.png',
  zanbagh: '/img/zanbagh.svg',
  parsis: '/img/parsis.svg',
};

const SparkLineComponent: React.FC<{ values: number[]; positive: boolean }> = ({
  values,
  positive,
}) => {
  const width = 100;
  const height = 28;
  const padding = 2;

  const path = useMemo(() => {
    if (!values || values.length === 0) return '';
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const stepX = (width - padding * 2) / (values.length - 1);
    return values
      .map((v, i) => {
        const x = padding + i * stepX;
        const y =
          height - padding - ((v - min) / range) * (height - padding * 2);
        return `${i === 0 ? 'M' : 'L'}${x},${y}`;
      })
      .join(' ');
  }, [values]);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path
        d={path}
        fill='none'
        stroke={positive ? '#16a34a' : '#dc2626'}
        strokeWidth='2'
      />
    </svg>
  );
};

const SparkLine = memo(SparkLineComponent);

export default function Table() {
  const [showSpecialOnly, setShowSpecialOnly] = useState(false);
  const [tab, setTab] = useState<'coin' | 'parsian' | 'shemsh'>('coin');
  const {
    data: products,
    isLoading,
    refetch,
    isFetching,
  } = useGetProductsQuery(undefined, {
    pollingInterval: 30000,
  });

  const router = useRouter();

  const categoryKeys: Record<string, string[]> = {
    seke: ['seke'],
    parsian: ['parsian'],
    shemsh: ['azadi', 'milad', 'roz', 'zanbagh', 'parsis'],
  };

  const defaultImages: Record<string, string> = {
    seke: '/img/seke.png',
    parsian: '/img/parsian.svg',
    shemsh: '/img/shemsh/default.svg',
  };

  const priorityOrder = [
    'تمام امامی',
    'تمام بهار آزادی',
    'نیم بهار آزادی',
    'ربع بهار آزادی',
    'سکه یک گرمی',
    'امامی قبل ۸۶',
    'نیم قبل ۸۶',
    'ربع قبل ۸۶',
  ];

  const rows = useMemo(() => {
    const data = products ?? [];
    let cat = '';

    if (tab === 'coin') cat = 'seke';
    else if (tab === 'parsian') cat = 'parsian';
    else if (tab === 'shemsh') cat = 'shemsh';

    let filtered = data.filter((p) => p.category === cat);
    if (showSpecialOnly) filtered = filtered.filter((p) => p.is_special_price);

    if (cat === 'seke') {
      filtered = filtered.sort((a, b) => {
        const indexA = priorityOrder.findIndex((name) =>
          a.name_fa.includes(name)
        );
        const indexB = priorityOrder.findIndex((name) =>
          b.name_fa.includes(name)
        );
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
      });
    }

    return filtered.map((p) => {
      const normalized = (p as any).name_en?.toLowerCase() || '';
      const keys = categoryKeys[cat] || [];
      let key = keys.find((k) => normalized.includes(k));
      const image = key ? imageMap[key] : defaultImages[cat];

      return {
        ...p,
        spark: [1, 2, 3, 2, 1],
        changePct: (p as any).buy_price_change_percent ?? 0,
        image,
      };
    });
  }, [products, tab, showSpecialOnly]);

  const updatedAt = useMemo(() => {
    if (!products || products.length === 0) return { date: '', time: '' };
    const parsian = products.find((p) => p.category === 'parsian');
    if (!parsian?.shamsi_updated_at) return { date: '', time: '' };

    const [date, time] = parsian.shamsi_updated_at.split(' ');
    return { date, time };
  }, [products]);

  const gold18Price = useMemo(() => {
    if (!products) return null;
    const gold18 = products.find((p) => p.name_fa.includes('۱۸ عیار'));
    return gold18?.latest_buy_price ?? null;
  }, [products]);

  if (isLoading) {
    return (
      <div className='flex items-center justify-center p-4 text-gray-500'>
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div dir='rtl' className='w-full px-2 sm:px-4 lg:px-16 mt-10 sm:mt-20'>
      <div className='flex justify-center lg:my-6 my-12 w-full'>
        <div className='flex w-[60%] sm:w-[60%] lg:w-[30%] items-center justify-center bg-primary-400 border border-primary-400 rounded-[10px] px-2 py-1 lg:py-2'>
          <button
            type='button'
            onClick={() => setTab('coin')}
            className={`${
              tab === 'coin' ? 'bg-white shadow' : ''
            } w-1/2 py-2 lg:py-2 rounded-[8px] text-xs sm:text-sm text-gray-700`}
          >
            سکه
          </button>
          <button
            type='button'
            onClick={() => setTab('parsian')}
            className={`${
              tab === 'parsian' ? 'bg-white shadow' : ''
            } w-1/2 py-2 lg:py-2 rounded-[8px] text-xs sm:text-sm text-gray-700`}
          >
            پارسیان
          </button>
          <button
            type='button'
            onClick={() => setTab('shemsh')}
            className={`${
              tab === 'shemsh' ? 'bg-white shadow' : ''
            } w-1/2 py-2 lg:py-2 rounded-[8px] text-xs sm:text-sm text-gray-700`}
          >
            شمش
          </button>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2'>
        <h2 className='text-[16px] lg:text-xl font-semibold text-gray-800'>
          قیمت لحظه ای
        </h2>
        {gold18Price && (
          <div className='text-[16px] lg:text-base font-medium text-gray-700'>
            قیمت گرم طلا ۱۸ عیار: {gold18Price.toLocaleString('fa-IR')} تومان
          </div>
        )}
        <div className='flex justify-between items-center gap-2 sm:gap-4'>
          <button
            onClick={() => setShowSpecialOnly((prev) => !prev)}
            className={`text-[14px] sm:text-xs lg:text-sm rounded-[16px] border px-2 sm:px-4 py-1 transition ${
              showSpecialOnly
                ? 'bg-[#F65555] text-white border-[#F65555]'
                : 'text-[#E40E0E] border-[#F65555]'
            }`}
          >
            قیمت ویژه
          </button>

          <div className='text-[12px] sm:text-xs flex items-center gap-2 text-gray-500'>
            <div className='flex flex-col'>
              <span>
                آخرین بروزرسانی:
                <span dir='ltr'>{updatedAt.date.replace(/-/g, '/')}</span>
              </span>
              <span className='flex justify-between items-center gap-1'>
                ساعت {updatedAt.time}
                <button onClick={() => refetch()} disabled={isFetching}>
                  <IoRefreshOutline
                    size={14}
                    className={
                      isFetching
                        ? 'animate-spin text-gray-400'
                        : 'text-gray-600'
                    }
                  />
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* جدول */}
      <div className='mt-4'>
        <div className='max-h-none rounded-[15px] overflow-visible lg:max-h-[550px] lg:overflow-x-auto lg:overflow-y-auto'>
          <table className='w-full border-collapse text-[14px] lg:text-base'>
            <thead className='sticky top-0 bg-[#96A375] shadow rounded-t-8 z-10'>
              <tr className='bg-transparent text-gray-100 text-[14px]  lg:text-base'>
                <th className='py-4 lg:pr-20 text-right px-1 sm:px-3 lg:px-5 min-w-[150px]'>
                  بازار
                </th>
                <th className='py-2 px-1 sm:px-3 lg:px-5'>قیمت خرید (تومان)</th>
                <th className='py-2 px-1 sm:px-3 lg:px-5'>قیمت فروش (تومان)</th>
                <th className='py-2 px-1 sm:px-3 lg:px-5'>تغییرات (روزانه)</th>
                <th className='py-2 px-1 sm:px-3 lg:px-5 hidden lg:table-cell'>
                  مشاهده نمودارها
                </th>
                <th className='py-2 px-1 sm:px-3 lg:px-5 hidden lg:table-cell'></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const positive = (r.changePct ?? 0) >= 0;
                const isActive = r.is_active ?? true;

                return (
                  <tr
                    key={r.product_id}
                    className={`border-b border-gray-300 text-[14px]  lg:text-base  ${
                      r.is_special_price
                        ? 'bg-[#F0D8BF] border border-[#C58112]'
                        : !isActive
                        ? 'bg-[#E6E6E6] text-[#909090]'
                        : 'bg-[#FAFAF7]'
                    }`}
                  >
                    <td className='py-3 px-2 lg:pr-20 relative flex items-center gap-2 min-w-[150px] whitespace-normal'>
                      {r.is_special_price && (
                        <span className='absolute right-0 top-1 lg:top-1/2 -translate-y-1/2 rotate-12 text-[#E40E0E] text-[14px] px-0 lg:px-2 py-0.5 z-20'>
                          قیمت ویژه
                        </span>
                      )}
                      <img
                        src={r.image}
                        alt={r.name_fa}
                        className='w-6 h-6 lg:w-8 lg:h-8 relative '
                      />
                      <span className='relative text-[14px] lg:text-base'>
                        {r.name_fa}
                      </span>
                    </td>

                    <td className='py-2 px-2 text-center'>
                      {r.latest_sell_price.toLocaleString('fa-IR')}
                    </td>
                    <td className='py-2 px-2 text-center'>
                      {r.latest_buy_price.toLocaleString('fa-IR')}
                    </td>

                    <td
                      className={`py-2 px-2 text-center ${
                        positive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {r.changePct.toLocaleString('fa-IR')}%
                    </td>

                    <td className='py-2 px-2 text-center hidden lg:block'>
                      <img
                        src='/img/Presentation.svg'
                        alt='presentation'
                        className='w-6 h-6 sm:w-8 sm:h-8 mx-auto cursor-pointer'
                        onClick={() =>
                          router.push(
                            `/timeseries/${
                              r.product_id
                            }?name=${encodeURIComponent(r.name_fa)}`
                          )
                        }
                      />
                    </td>

                    <td className='py-2 whitespace-normal min-w-[150px] text-center hidden lg:table-cell'>
                      <button
                        className={`lg:px-6 px-2  py-2 text-[14px]  rounded-[16px] border ${
                          r.is_special_price
                            ? 'bg-transparent border-primary-500 text-primary-500 font-semibold'
                            : !r.is_active
                            ? 'bg-transparent border-[#909090] text-[#909090] cursor-not-allowed'
                            : 'bg-transparent border-primary-500 text-primary-500'
                        }`}
                        disabled={!r.is_active}
                        onClick={() => {
                          if (r.is_active || r.is_special_price) {
                            window.location.href =
                              'https://app.sekemohammad.com/';
                          }
                        }}
                      >
                        خرید یا فروش
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
