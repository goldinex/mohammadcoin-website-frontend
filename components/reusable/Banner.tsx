'use client';

import React from 'react';

export default function Banner() {
  return (
    <section dir='rtl' className='w-full mt-8 lg:mt-12 mb-4 lg:min-h-[320px] min-h-[183px] '>
      <div className='bg-[#F3F5F0] rounded-[8px]overflow-x-hidden'>
        <div className='mx-auto max-w-5xl grid  grid-cols-2 items-center gap-6'>
          <div className='text-center md:text-right'>
            <h2 className='lg:text-[32px] text-[16px] font-semibold text-gray-800 mb-3'>
              خرید و فروش آنی
            </h2>
            <p className='lg:text-[32px] text-[16px] text-gray-700'>
              راحت بخر و آسان بفروش
            </p>
          </div>
          <div className='flex items-center justify-end order-1 md:order-none'>
            <div className=' flex items-center justify-center'>
              <img
                src='/img/banner.svg'
                alt='banner'
                className='w-full lg:max-w-full lg:max-h-full object-contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
