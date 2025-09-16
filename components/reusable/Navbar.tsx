import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const GoldPrice = dynamic(
  () => import('./../../components/reusable/GoldPrice'),
  {
    ssr: false,
  }
);

export default function Navbar() {
  return (
    <div>
      <div className='w-[96%] mx-auto text-neutral-900 flex justify-between items-center px-6 py-4'>
        <div className='flex items-center'>
          <div className='w-16  ml-20'>
            <Link href='/'>
              <img src='/img/logo3.svg' alt='لوگو' className='cursor-pointer' />
            </Link>
          </div>
          <div className='flex text-[16px] gap-8'>
            <a href='#pricesTable' className='hover:text-yellow-400'>
              قیمت لحظه‌ای
            </a>

            <a href='/about' className='hover:text-yellow-400'>
              درباره ی ما
            </a>
            <a href='#faq' className='hover:text-yellow-400'>
              سوالات متداول
            </a>
            <a href='#' className='hover:text-yellow-400'>
              پشتیبانی
            </a>
          </div>
        </div>

        <a
          href='https://app.sekemohammad.com'
          className='bg-primary-300 text-white px-6 py-2 rounded-[16px] font-medium hover:bg-yellow-500'
        >
          ورود و ثبت‌نام
        </a>
      </div>
      <GoldPrice />
    </div>
  );
}
