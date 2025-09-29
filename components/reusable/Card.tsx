'use client';

import { useMemo, useState, useRef } from 'react';
import { useGetProductsQuery } from '@/src/redux/api/authApiSlice';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

type Bullion = {
  product_id: number;
  image: string;
  name_fa: string;
  latest_buy_price: number;
  category: string;
  is_active: boolean;
  is_special_price: boolean;
};

function BullionCard({ item }: { item: Bullion }) {
  const disabled = !item.is_active;
  const ayar = item.name_fa.includes('پارسیس') ? '999.9' : '995';

  return (
    <div
      className={` rounded-[10px] p-4 transition
        ${
          disabled
            ? 'bg-[#E6E6E6] opacity-50 cursor-not-allowed'
            : 'bg-primary-210'
        }
      `}
    >
      <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start gap-4'>
        <div className='flex-1 justify-start'>
          {item.is_special_price && (
            <div className='text-red-600 text-[10px] lg:text-sm font-semibold mb-1'>
              قیمت ویژه
            </div>
          )}
          <div className='text-[16px] mt-4 lg:text-[18px] font-medium text-gray-800 mb-2'>
            {item.name_fa}
          </div>
          <div className='text-[16px] lg:text-[14px] text-gray-600 leading-5'>
            عیار {ayar}
          </div>
        </div>

        <div className='w-32 h-32 bg-white rounded-[10px] flex items-center justify-center'>
          <img
            src={item.image}
            alt={item.name_fa}
            className='max-h-24 object-contain'
          />
        </div>
      </div>

      <div className='mt-4 flex flex-col lg:flex-row items-center lg:items-center justify-between'>
        <div className='text-[16px] lg:mb-0 mb-4 lg:text-[18px] text-gray-800'>
          قیمت روز: {item.latest_buy_price.toLocaleString('fa-IR')}
        </div>
        <button
          disabled={disabled}
          className={`text-center px-12 py-2 text-[16px] rounded-[4px] lg:rounded-[20px] 
            ${
              disabled
                ? 'bg-[#909090] cursor-not-allowed'
                : 'bg-[#96A375] text-white'
            }
          `}
          onClick={() => {
            if (item.is_active) {
              window.location.href = 'https://app.sekemohammad.com/';
            }
          }}
        >
          خرید
        </button>
      </div>
    </div>
  );
}

export default function CardSection() {
  const { data: products, isLoading } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const bullionSectionRef = useRef<HTMLDivElement>(null);

  const imageMap: Record<string, string> = {
    azadi: '/img/azadi.png',
    milad: '/img/milad.png',
    roz: '/img/roz.png',
    zanbagh: '/img/zanbagh.svg',
    parsis: '/img/parsis.svg',
  };

  const bullionItems: Bullion[] = useMemo(() => {
    if (!products) return [];
    return products
      .filter((p) => p.category === 'shemsh')
      .map((p) => {
        const normalized = p.name_en?.toLowerCase() || '';
        const key = Object.keys(imageMap).find((k) => normalized.includes(k));

        const image = key ? imageMap[key] : '/img/seke.png';

        return {
          product_id: p.product_id,
          name_fa: p.name_fa,
          latest_buy_price: p.latest_buy_price,
          category: p.category,
          image,
          is_active: p.is_active,
          is_special_price: p.is_special_price,
        };
      });
  }, [products]);

  const visibleItems = bullionItems.slice(0, visibleCount);
  const hasMore = visibleCount < bullionItems.length;

  if (isLoading) {
    return (
      <div className='flex items-center justify-center p-4 text-gray-500'>
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <section
      dir='rtl'
      ref={bullionSectionRef}
      className='w-full px-4 lg:px-16 mt-10 lg:mt-10 py-10'
    >
      <h3 className='text-center text-[32px] font-semibold text-gray-800 mb-10'>
        شمش ها
      </h3>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-6'>
        {visibleItems.map((item) => (
          <BullionCard key={item.product_id} item={item} />
        ))}
      </div>

      {bullionItems.length > 6 && (
        <div className='w-[40%] mx-auto flex lg:flex-row flex-col justify-center mt-6'>
          <button
            onClick={() => {
              if (hasMore) {
                setVisibleCount((c) => Math.min(c + 6, bullionItems.length));
              } else {
                setVisibleCount(6);
                bullionSectionRef.current?.scrollIntoView({
                  behavior: 'smooth',
                });
              }
            }}
            className='flex items-center gap-2 text-[14px] px-4 py-2 border border-secondary-400 rounded-[16px] text-secondary-400'
          >
            <p className='text-[14px] lg:text-[18px] text-center'>
              {hasMore ? 'نمایش بیشتر' : 'نمایش کمتر'}
            </p>
            <span>
              {hasMore ? (
                <MdOutlineKeyboardArrowDown />
              ) : (
                <MdOutlineKeyboardArrowUp />
              )}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
