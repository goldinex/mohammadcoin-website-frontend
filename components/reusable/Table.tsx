'use client';

import React, { useMemo, useState, memo } from 'react';

type Row = {
  id: string;
  image: string; // public path under /public
  name: string;
  buyPrice: number;
  sellPrice: number;
  changePct: number; // e.g. 1.25 => 1.25%
  spark: number[]; // small series for sparkline
  isSpecialPrice?: boolean;
};

const SparkLineComponent: React.FC<{ values: number[]; positive: boolean }> = ({ values, positive }) => {
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
        const y = height - padding - ((v - min) / range) * (height - padding * 2);
        return `${i === 0 ? 'M' : 'L'}${x},${y}`;
      })
      .join(' ');
  }, [values]);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <path d={path} fill="none" stroke={positive ? '#16a34a' : '#dc2626'} strokeWidth="2" />
    </svg>
  );
};

const SparkLine = memo(SparkLineComponent);

export default function Table() {
  const [tab, setTab] = useState<'coin' | 'parsian'>('coin');

  const coinRows: Row[] = useMemo(() => [
    {
      id: 'coin-emami',
      image: '/img/seke.png',
      name: 'سکه تمام امامی',
      buyPrice: 32000000,
      sellPrice: 32200000,
      changePct: 0.8,
      spark: [30.9, 31.2, 31.0, 31.6, 31.8, 32.2],
      isSpecialPrice: true,
    },
    {
      id: 'coin-nim',
      image: '/img/seke.png',
      name: 'نیم بهار آزادی',
      buyPrice: 17900000,
      sellPrice: 18100000,
      changePct: -0.4,
      spark: [18.3, 18.1, 18.0, 18.2, 18.0, 17.9],
    },
  ], []);

  const parsianRows: Row[] = useMemo(() => [
    {
      id: 'parsian-1g',
      image: '/img/seke.png',
      name: 'طلای پارسیان 1 گرمی',
      buyPrice: 2450000,
      sellPrice: 2500000,
      changePct: 1.1,
      spark: [2.35, 2.42, 2.38, 2.45, 2.48, 2.5],
      isSpecialPrice: true,
    },
    {
      id: 'parsian-2g',
      image: '/img/seke.png',
      name: 'طلای پارسیان 2 گرمی',
      buyPrice: 4850000,
      sellPrice: 4920000,
      changePct: 0.6,
      spark: [4.7, 4.82, 4.78, 4.85, 4.88, 4.92],
    },
  ], []);

  const rows = useMemo(() => (tab === 'coin' ? coinRows : parsianRows), [tab, coinRows, parsianRows]);

  const nowFa = useMemo(() => new Intl.DateTimeFormat('fa-IR', { dateStyle: 'short' }).format(new Date()), []);

  return (
    <div dir="rtl" className="w-full mt-20">
        <div className='w-full flex justify-center my-20'>
        <div className="flex w-fit items-center justify-center bg-primary-400 border border-primary-400 rounded-[10px] px-8 py-3">
        <button
            type="button"
            onClick={() => setTab('coin')}
            className={`${tab === 'coin' ? 'bg-white shadow' : ''} px-28 py-3 rounded-[8px] text-sm text-gray-700`}
          >
            سکه
          </button>
          <button
            type="button"
            onClick={() => setTab('parsian')}
            className={`${tab === 'parsian' ? 'bg-white shadow' : ''} px-28 py-3 rounded-[8px] text-sm text-gray-700`}
          >
            پارسیان
          </button>
         
        </div>
        </div>
      <div className='w-full flex items-center justify-between'>
      <div className="flex items-start justify-between mb-8">
        <h2 className="text-xl font-semibold text-gray-800">قیمت لحظه ای</h2>
      
      </div>
      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
      <div className="text-black ml-3">فروش ویژه</div>
        <div>
          آخرین بروزرسانی: {nowFa}
        </div>
      
      </div>
        </div> 


 

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-right text-gray-500">
              <th className="px-4 py-3">بازار</th>
              <th className="px-4 py-3">قیمت خرید از ما (تومان)</th>
              <th className="px-4 py-3">قیمت فروش به شما (تومان)</th>
              <th className="px-4 py-3">تغییرات (24h)</th>
              <th className="px-4 py-3">مشاهده ی نمودارها</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, idx) => {
              const positive = r.changePct >= 0;
              return (
                <tr key={r.id} className={`border-t border-gray-100 ${idx === 0 ? 'bg-primary-400' : ''}`}>
                  <td className="px-4 py-3">
                    <div className="relative flex items-center gap-3 min-w-[200px] pr-20">
                      {r.isSpecialPrice && (
                        <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 rotate-12 text-[#f65555] text-[10px] px-4 py-0.5  z-20">
                          قیمت ویژه
                        </span>
                      )}
                      <img src={r.image} alt={r.name} className="w-8 h-8 object-contain relative z-10" />
                      <div className="flex items-center gap-2 relative z-10">
                        <span className="text-gray-800">{r.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-800">{r.buyPrice.toLocaleString('fa-IR')}</td>
                  <td className="px-4 py-3 text-gray-800">{r.sellPrice.toLocaleString('fa-IR')}</td>
                  <td className={`px-4 py-3 ${positive ? 'text-green-600' : 'text-red-600'}`}>{Math.abs(r.changePct).toLocaleString('fa-IR')}%</td>
                  <td className="px-4 py-1">
                    <div className="flex items-center gap-3">
                      <SparkLine key={`spark-${r.id}`} values={r.spark} positive={positive} />
                      <button className="text-[11px] text-emerald-600 hover:text-emerald-700">مشاهده ی نمودار</button>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <button className="px-5 py-2 text-xs rounded-[8px] border border-primary-500 text-primary-500  hover:bg-[#fff1bd]">
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
  );
}