'use client';

import { useState, useMemo } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import {
  useGetTimeseriesQuery,
  useGetProductsQuery,
} from '@/src/redux/api/authApiSlice';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

type TabType = 'daily' | 'weekly' | 'monthly';

interface PricePoint {
  date: string;
  buy_price: number;
  sell_price: number;
  shamsi_date: string;
}

interface TimeseriesResponse {
  product_name?: string;
  daily: PricePoint[];
  weekly: PricePoint[];
  monthly: PricePoint[];
}

export default function TimeseriesPage() {
  const params = useParams<{ product_id: string }>();
  const searchParams = useSearchParams();
  const productId: string = params?.product_id ?? '';
  const nameFromQuery = searchParams?.get('name') ?? undefined;
  const [activeTab, setActiveTab] = useState<TabType>('daily');

  const {
    data: timeseries,
    isLoading,
    error,
    refetch,
  } = useGetTimeseriesQuery(productId, {
    skip: !productId,
  }) as {
    data?: TimeseriesResponse;
    isLoading: boolean;
    error: any;
    refetch: () => void;
  };

  const { data: products } = useGetProductsQuery(undefined, {}) as {
    data?: Array<any> | undefined;
  };

  const productName = useMemo(() => {
    if (nameFromQuery) return nameFromQuery;
    if (timeseries?.product_name) return timeseries.product_name;
    const found = products?.find(
      (p: any) => String(p.product_id) === String(productId)
    );
    return (
      found?.name_fa ??
      found?.name ??
      (productId ? `محصول شماره ${productId}` : 'محصول نامشخص')
    );
  }, [nameFromQuery, timeseries, products, productId]);

  // 👇 اینجا TS دقیقاً می‌فهمه که خروجی PricePoint[] هست
  const filteredData: PricePoint[] = useMemo(() => {
    if (!timeseries) return [];
    return timeseries[activeTab] as PricePoint[];
  }, [timeseries, activeTab]);

  const formatChartOptions = (data: PricePoint[]): Highcharts.Options => {
    const buyPrices = data.map((d) => d.buy_price);
    const sellPrices = data.map((d) => d.sell_price);
    const dates = data.map((d) => d.shamsi_date);

    if (data.length === 0) return { title: { text: 'داده‌ای موجود نیست' } };

    const all = [...buyPrices, ...sellPrices];
    const max = Math.max(...all);
    const min = Math.min(...all);
    const buffer = (max - min) * 0.05;

    return {
      chart: {
        type: 'areaspline',
        backgroundColor: 'transparent',
        height: 400,
      },
      title: { text: '' },
      xAxis: {
        categories: dates,
        type: 'category',
        visible: false,
      },
      yAxis: {
        min: min - buffer,
        max: max + buffer,
        visible: false,
      },
      tooltip: {
        shared: true,
        useHTML: true,
        formatter: function () {
          const i = this.points?.[0]?.x ?? 0;
          return `<div style="font-family: 'MyFont'; direction: rtl; text-align: right">
                    <b>${dates[i]}</b><br/>
                    خرید: ${buyPrices[i].toLocaleString('fa-IR')} تومان<br/>
                    فروش: ${sellPrices[i].toLocaleString('fa-IR')} تومان
                  </div>`;
        },
      },
      plotOptions: {
        areaspline: {
          marker: {
            enabled: false,
            states: {
              hover: {
                enabled: true,
                radius: 5,
              },
            },
          },
        },
      },

      series: [
        {
          name: 'قیمت خرید',
          type: 'areaspline',
          data: buyPrices.map((v, i) => ({ x: i, y: v })),
          color: '#43C478',
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, 'rgba(67,196,120,0.4)'],
              [1, 'rgba(255,255,255,0)'],
            ],
          },
        },
        {
          name: 'قیمت فروش',
          type: 'areaspline',
          data: sellPrices.map((v, i) => ({ x: i, y: v })),
          color: '#F65555',
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, 'rgba(246,85,85,0.35)'],
              [1, 'rgba(255,255,255,0)'],
            ],
          },
        },
      ],

      credits: { enabled: false },
      legend: {
        enabled: true,
        align: 'center',
        verticalAlign: 'top',
        layout: 'horizontal',
      },
    };
  };

  return (
    <div className='p-4'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-xl font-bold'>
          {productName
            ? `نمودار قیمت برای ${productName}`
            : `نمودار برای محصول شماره ${productId}`}
        </h1>
      </div>
      <div className='flex justify-center my-6 sm:my-12'>
        <div className='flex w-full sm:w-[60%] lg:w-[30%] items-center justify-center bg-primary-400 border border-primary-400 rounded-[10px] px-2 py-1 lg:py-2'>
          {(['daily', 'weekly', 'monthly'] as TabType[]).map((tab) => (
            <button
              key={tab}
              type='button'
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? 'bg-white shadow' : ''
              } w-1/3 py-2 lg:py-4 rounded-[8px] text-xs sm:text-sm text-gray-700`}
            >
              {tab === 'daily'
                ? 'روزانه'
                : tab === 'weekly'
                ? 'هفتگی'
                : 'ماهانه'}
            </button>
          ))}
        </div>
      </div>
      {isLoading ? (
        <div className='text-center text-gray-500 py-20'>
          در حال بارگذاری...
        </div>
      ) : error ? (
        <div className='text-center text-red-500 py-20'>
          خطا در دریافت داده‌ها
        </div>
      ) : filteredData.length === 0 ? (
        <div className='text-center text-gray-500 py-20'>
          داده‌ای موجود نیست
        </div>
      ) : (
        <div className='w-[95%] bg-[#FDFDFD] rounded-[24px] lg:w-[80%] mx-auto'>
          <HighchartsReact
            key={activeTab}
            highcharts={Highcharts}
            options={formatChartOptions(filteredData)}
          />
        </div>
      )}
      <div className='mt-10'>
        <p className='text-[13px] lg:text-[26px] mb-3'>{`نمودار قیمت برای ${productName}`}</p>
        <p className='lg:text-[18px] text-[11px]'>
          نمودار بالا روند نوسانات قیمتی سکه پارسیان ۱/۱۰۰ را در بازه زمانی
          مشخص‌شده نشان می‌دهد. تغییرات قیمت این سکه تحت تأثیر عواملی مانند نرخ
          جهانی طلا، نوسانات ارز و شرایط بازار داخلی قرار دارد. بررسی این نمودار
          می‌تواند به سرمایه‌گذاران و خریداران کمک کند تا روند حرکتی سکه را بهتر
          تحلیل کرده و تصمیمات آگاهانه‌تری در خرید یا فروش داشته باشند.
        </p>
      </div>
    </div>
  );
}
