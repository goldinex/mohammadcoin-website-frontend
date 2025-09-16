'use client';

import React, { useMemo, useState, memo } from 'react';
import { useGetProductsQuery } from '@/src/redux/api/authApiSlice';

type Product = {
  product_id: number;
  category: string;
  name_fa: string;
  latest_buy_price: number;
  latest_sell_price: number;
  is_special_price?: boolean;
  is_active?: boolean;
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
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className='overflow-visible'
    >
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
  const [tab, setTab] = useState<'coin' | 'parsian'>('coin');
  const { data: products, isLoading } = useGetProductsQuery();

  const rows = useMemo(() => {
    if (!products) return [];
    const cat = tab === 'coin' ? 'seke' : 'parsian';
    return products
      .filter((p) => p.category === cat)
      .map((p) => ({
        ...p,
        spark: [1, 2, 3, 2, 1],
        changePct: 0.5,
        image: cat === 'seke' ? '/img/seke.svg' : '/img/parsian.svg',
      }));
  }, [products, tab]);

  const nowFa = useMemo(
    () =>
      new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(
        new Date()
      ),
    []
  );

  if (isLoading) {
    return (
      <div className='flex items-center justify-center p-4 text-gray-500'>
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div dir='rtl' className='w-full px-4 lg:px-16 mt-20'>
      <div className='w-full flex justify-center my-20'>
        <div className='flex w-full lg:w-[30%] items-center justify-center bg-primary-400 border border-primary-400 rounded-[10px] px-2 lg:py-3 py-1'>
          <button
            type='button'
            onClick={() => setTab('coin')}
            className={`${
              tab === 'coin' ? 'bg-white shadow' : ''
            } w-1/2 py-4 rounded-[8px] text-sm text-gray-700`}
          >
            سکه
          </button>
          <button
            type='button'
            onClick={() => setTab('parsian')}
            className={`${
              tab === 'parsian' ? 'bg-white shadow' : ''
            } w-1/2 py-4 rounded-[8px] text-sm text-gray-700`}
          >
            پارسیان
          </button>
        </div>
      </div>

      <div className='w-full flex items-center justify-between mb-3'>
        <h2 className='text-xl font-semibold text-gray-800'>قیمت لحظه ای</h2>
        <div className='flex items-center'>
          <div className='text-black text-[14px] border border-[#F65555] ml-4 rounded-[16px] px-4 py-2 mb-3 w-fit'>
            قیمت ویژه
          </div>
          <div className='text-xs flex flex-col  text-gray-500'>
            <span className='mb-2'>آخرین بروزرسانی: {nowFa}</span>
            <span>ساعت 22:50</span>
          </div>
        </div>
      </div>

      <div className='mt-4 overflow-x-auto'>
        <div className='max-h-[calc(8*68px)] overflow-y-auto'>
          <table className='min-w-full text-sm'>
            <thead>
              <tr className='text-right text-gray-500'>
                <th className='pl-4 pr-28 py-3'>بازار</th>
                <th className='px-4 py-3'>قیمت خرید از ما (تومان)</th>
                <th className='px-4 py-3'>قیمت فروش به ما (تومان)</th>
                <th className='px-4 py-3'>تغییرات (روزانه)</th>
                <th className='px-4 py-3'>مشاهده ی نمودارها</th>
                <th className='px-4 py-3'></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => {
                const positive = (r.changePct ?? 0) >= 0;
                const isActive = r.is_active ?? true;

                return (
                  <tr
                    key={r.product_id}
                    className={`border-b border-[#dedfda] ${
                      r.is_special_price
                        ? 'bg-[#DECCCC] border border-[#C58112]'
                        : !isActive
                        ? 'bg-[#E6E6E6] text-[#909090] cursor-not-allowed'
                        : 'bg-[#fffffb]'
                    }`}
                  >
                    <td className='px-4 py-3'>
                      <div className='relative flex items-center gap-3 min-w-[200px] pr-20'>
                        {r.is_special_price && (
                          <span className='pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 rotate-12 text-[#f65555] text-[10px] px-4 py-0.5  z-20'>
                            قیمت ویژه
                          </span>
                        )}
                        <img
                          src={r.image}
                          alt={r.name_fa}
                          className='w-8 h-8 object-contain relative z-10'
                        />
                        <div className='flex items-center gap-2 relative z-10'>
                          <span
                            className={`text-gray-800 ${
                              !isActive ? 'text-[#909090]' : 'text-[#000]'
                            }`}
                          >
                            {r.name_fa}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      className={`text-gray-800 px-4 py-3  ${
                        r.is_special_price
                          ? 'text-gray-800 font-semibold'
                          : !isActive
                          ? 'text-[#909090]'
                          : 'text-gray-800'
                      }`}
                    >
                      {r.latest_buy_price.toLocaleString('fa-IR')}
                    </td>
                    <td
                      className={`px-4 py-3 ${
                        r.is_special_price
                          ? 'text-gray-800 font-semibold'
                          : !isActive
                          ? 'text-[#909090]'
                          : 'text-gray-800'
                      }`}
                    >
                      {r.latest_sell_price.toLocaleString('fa-IR')}
                    </td>

                    <td
                      className={`px-4 py-3 ${
                        r.is_special_price
                          ? 'text-green-600 font-semibold'
                          : !isActive
                          ? 'text-gray-400'
                          : positive
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {Math.abs(r.changePct).toLocaleString('fa-IR')}%
                    </td>

                    <td className='px-4 py-1'>
                      <td className='px-4 py-1'>
                        <div className='flex items-center gap-3'>
                          <button
                            className={`text-[11px] `}
                            disabled={!isActive}
                          >
                            <img
                              src='/img/Presentation.svg'
                              alt='presentation'
                              className='w-10 h-10'
                            />
                          </button>
                        </div>
                      </td>
                    </td>
                    <td className='px-4 py-3'>
                      <button
                        className={`px-5 py-2 text-xs rounded-[8px] border ${
                          r.is_special_price
                            ? 'bg-[#EDEAE7] border-primary-500 text-primary-500'
                            : !isActive
                            ? 'bg-[#E6E6E6] border-[#909090] text-[#909090] cursor-not-allowed '
                            : 'bg-[#fffffb] border-primary-500 text-primary-500'
                        }`}
                        disabled={isActive}
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
