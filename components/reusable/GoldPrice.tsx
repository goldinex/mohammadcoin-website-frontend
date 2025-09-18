// components/GoldCarousel.tsx
import React from 'react';
import { useGetProductsQuery } from '@/src/redux/api/authApiSlice';
import { Product } from '@/src/types/product';
import { cartText } from '@/utils/text';

const coinNames = [
  `${cartText.imami}`,
  `${cartText.tamamAzadi}`,
  `${cartText.nimAzadi}`,
  `${cartText.robAzadi}`,
  `${cartText.grami}`,
];

export default function GoldCarousel() {
  const {
    data: productsData = [],
    isLoading,
    error,
  } = useGetProductsQuery(undefined, {
    pollingInterval: 30000,
  });

  if (isLoading) return <p>{cartText.loading}</p>;
  if (error) return <p>{cartText.err}</p>;

  const coins = productsData.filter((p: Product) =>
    coinNames.includes(p.name_fa)
  );
  const scrollItems = [...coins, ...coins, ...coins];

  return (
    <div className='overflow-hidden mb-4 w-full lg:w-[95%] mx-auto h-[40px] lg:h-[68px] bg-primary-210 rounded-none lg:rounded-[16px] flex items-center relative'>
      <div
        className='flex animate-scroll whitespace-nowrap'
        style={{ gap: '2rem' }}
      >
        {scrollItems.map((coin, idx) => (
          <div
            dir='rtl'
            key={idx}
            className='flex items-center px-4 py-2 text-sm'
          >
            <p className='ml-2 text-[#616B47]'>{coin.name_fa}:</p>
            <p className='text-[#616B47]'>
              {coin.latest_buy_price.toLocaleString()} {cartText.ir}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          display: inline-flex;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(-66.66%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
