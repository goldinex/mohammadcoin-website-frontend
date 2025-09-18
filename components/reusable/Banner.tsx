'use client';

import React from 'react';

export default function Banner() {
  return (
    <section dir='rtl' className='w-full mt-40 mb-4'>
      <div className='bg-[#F3F5F0] rounded-[8px] py-10 md:py-14 overflow-x-hidden'>
        <div className='mx-auto max-w-6xl grid  grid-cols-2 items-center gap-6'>
          <div className='text-center md:text-right'>
            <h2 className='lg:text-[32px] text-[13px] font-semibold text-gray-800 mb-3'>
              خرید و فروش آنی
            </h2>
            <p className='lg:text-[32px] text-[13px] text-gray-700'>
              راحت بخر و آسان بفروش
            </p>
          </div>
          <div className='flex items-center justify-center order-1 md:order-none'>
            <div className='w-[320px] h-[180px] sm:w-[380px] sm:h-[210px] md:w-[420px] md:h-[230px]  flex items-center justify-center'>
              <img
                src='/img/banner.png'
                alt='banner'
                className='w-[50%] lg:max-w-full lg:max-h-full object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
