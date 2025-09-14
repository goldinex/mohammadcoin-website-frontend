import React from 'react';
import dynamic from 'next/dynamic';

const GoldPrice = dynamic(() => import('./../../components/reusable/GoldPrice'), {
  ssr: false,
});

export default function Navbar() {
  return (
    <div>
      <div className='w-[96%] mx-auto text-neutral-900 flex justify-between items-center px-6 py-4'>
        <div className='flex items-center'>
          <div className='w-32 ml-20'>
            <img src='img/headerLogo.png' alt='' />
          </div>
          <div className='flex text-[16px] gap-8'>
            <a href='#' className='hover:text-yellow-400'>
              قیمت لحظه‌ای
            </a>
            <a href='#' className='hover:text-yellow-400'>
              قوانین و مقررات
            </a>
            <a href='#' className='hover:text-yellow-400'>
              راهنما
            </a>
            <a href='#' className='hover:text-yellow-400'>
              پشتیبانی
            </a>
          </div>
        </div>

        <button className='bg-primary-300 text-white px-6 py-2 rounded-[16px] font-medium hover:bg-yellow-500'>
          ورود و ثبت‌نام
        </button>
      </div>
      <GoldPrice />
    </div>
  );
}
