'use client';

import React, { useMemo, useState, memo } from 'react';
import { useGetProducts2Query } from '@/src/redux/api/authApiSlice';
import { useRouter } from 'next/navigation';
import { RefreshCw } from 'lucide-react';

type Product = {
  product_id: number;
  category: string;
  name_fa: string;
  latest_buy_price: number;
  latest_sell_price: number;
  is_special_price?: boolean;
  is_active?: boolean;
  buy_price_change_percent?: number;
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
  const [tab, setTab] = useState<'coin' | 'parsian'>('coin');
  const [skip, setSkip] = useState(true);
  const {
    data: products,
    isLoading,
    refetch,
    isFetching,
  } = useGetProducts2Query(undefined, { skip });

  const router = useRouter();

  React.useEffect(() => {
    setSkip(false);
  }, []);

  const rows = useMemo(() => {
    const data = products ?? [];
    const cat = tab === 'coin' ? 'seke' : 'parsian';

    let filtered = data.filter((p) => p.category === cat);
    if (showSpecialOnly) filtered = filtered.filter((p) => p.is_special_price);

    return filtered.map((p) => ({
      ...p,
      spark: [1, 2, 3, 2, 1],
      changePct: (p as any).buy_price_change_percent ?? 0,
      image: cat === 'seke' ? '/img/seke.svg' : '/img/parsian.svg',
    }));
  }, [products, tab, showSpecialOnly]);

  const nowFa = useMemo(
    () =>
      new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(
        new Date()
      ),
    []
  );

  const updatedAt = useMemo(() => {
    if (!products || products.length === 0) return { date: '', time: '' };
    const parsian = products.find((p) => p.category === 'parsian');
    if (!parsian?.shamsi_updated_at) return { date: '', time: '' };

    const [date, time] = parsian.shamsi_updated_at.split(' ');
    return { date, time };
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
        </div>
      </div>

      <div className='flex flex-row items-start sm:items-center justify-between mb-3 gap-2 sm:gap-0'>
        <h2 className='text-[12px] sm:text-base lg:text-xl font-semibold text-gray-800'>
          قیمت لحظه ای
        </h2>
        <div className='flex items-center gap-2 sm:gap-4'>
          <button
            onClick={() => setShowSpecialOnly((prev) => !prev)}
            className={`text-[10px] sm:text-xs lg:text-sm rounded-[16px] border px-2 sm:px-4 py-1 transition ${
              showSpecialOnly
                ? 'bg-[#F65555] text-white border-[#F65555]'
                : 'text-black border-[#F65555]'
            }`}
          >
            قیمت ویژه
          </button>

          <div className='text-[9px] sm:text-xs flex items-center gap-2 text-gray-500'>
            <div className='flex flex-col'>
              <span>
                آخرین بروزرسانی: <span dir='ltr'>{updatedAt.date}</span>
              </span>
              <span className='flex justify-between items-center gap-1'>
                ساعت {updatedAt.time}
                <button onClick={() => refetch()} disabled={isFetching}>
                  <RefreshCw
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

      <div className='mt-4'>
        <div className='max-h-[450px] overflow-y-auto'>
          <table className='w-full border-collapse text-[10px] sm:text-sm lg:text-base'>
            <thead className='sticky top-0 bg-white shadow z-10'>
              <tr className='bg-transparent text-gray-600 text-[9px] sm:text-xs lg:text-sm'>
                <th className='py-2 lg:pr-20 text-right px-1 sm:px-3 lg:px-5'>
                  بازار
                </th>
                <th className='py-2 px-1 sm:px-3 lg:px-5'>
                  قیمت خرید از ما (تومان)
                </th>
                <th className='py-2 px-1 sm:px-3 lg:px-5'>
                  قیمت فروش به ما (تومان)
                </th>
                <th className='py-2 px-1 sm:px-3 lg:px-5'>تغییرات (روزانه)</th>
                <th className='py-2 px-1 sm:px-3 lg:px-5'>مشاهده نمودارها</th>
                <th className='py-2 px-1 sm:px-3 lg:px-5'></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const positive = (r.changePct ?? 0) >= 0;
                const isActive = r.is_active ?? true;

                return (
                  <tr
                    key={r.product_id}
                    className={`border-b border-gray-300 text-[10px] sm:text-xs lg:text-sm ${
                      r.is_special_price
                        ? 'bg-[#DECCCC] border border-[#C58112]'
                        : !isActive
                        ? 'bg-[#E6E6E6] text-[#909090]'
                        : 'bg-[#fefefe]'
                    }`}
                  >
                    <td className='py-2 px-2 lg:pr-20 relative flex items-center gap-2'>
                      {r.is_special_price && (
                        <span className='absolute right-0 top-2 lg:top-1/2 -translate-y-1/2 rotate-12 text-[#f65555] text-[8px] sm:text-[10px] px-0 lg:px-2 py-0.5 z-20'>
                          قیمت ویژه
                        </span>
                      )}
                      <img
                        src={r.image}
                        alt={r.name_fa}
                        className='w-6 h-6  lg:w-8 lg:h-8 relative '
                      />
                      <span className='relative '>{r.name_fa}</span>
                    </td>

                    <td className='py-2 px-2 text-center'>
                      {r.latest_buy_price.toLocaleString('fa-IR')}
                    </td>

                    <td className='py-2 px-2 text-center'>
                      {r.latest_sell_price.toLocaleString('fa-IR')}
                    </td>

                    <td
                      className={`py-2 px-2 text-center ${
                        positive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {Math.abs(r.changePct).toLocaleString('fa-IR')}%
                    </td>

                    <td className='py-2 px-2 text-center'>
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

                    <td className='py-2 px-2 text-center'>
                      <button
                        className={`px-2 sm:px-4 py-1 text-[9px] sm:text-xs rounded-[6px] border ${
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
