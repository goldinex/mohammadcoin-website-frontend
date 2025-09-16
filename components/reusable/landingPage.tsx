import React from 'react';

export default function LandingPage() {
  return (
    <section
      dir='rtl'
      className='relative mb-4 lg:mb-20 overflow-hidden rounded-[12px] '
    >
      {/* Decorative gradient background */}
      <div className='absolute inset-0' />
      {/* <div className='absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-300/20 blur-3xl' />
      <div className='absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-success-500/10 blur-3xl' /> */}

      <div className='relative z-10 mx-3 lg:mx-20 px-1 lg:px-6 md:px-10 lg:py-12 pb-0 pt-12 md:py-16'>
        <div className='lg:grid grid-cols-1 flex flex-col-reverse lg:grid-cols-2 items-center'>
          <div>
            <h1 className='text-[16px] lg:text-[36px] leading-[1.35] font-bold text-secondary-900 mb-6'>
              تنها با چند کلیک، سکه موردنظر خود را با بهترین قیمت سفارش دهید و
              با بهترین قیمت بفروشید.
            </h1>
            <p className='text-secondary-700 text-[14px] md:text-[16px] mb-8'>
              تجربه‌ای سریع، امن و شفاف در خرید و فروش آنلاین سکه و پارسیان.
            </p>
            <div className='lg:flex hidden items-center gap-3'>
              <a  href='https://app.sekemohammad.com' className='bg-primary-300 text-white text-[15px] md:text-[16px] px-6 md:px-8 py-3 rounded-[16px] font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60'> ورود به اپلیکیشن</a>
           
            </div>
          </div>

          <div className='flex items-center justify-end'>
            <div className='relative will-change-transform'>
              {/* style={{ animation: 'floatY 6s ease-in-out infinite' }} */}
              <img
                src='/img/img2.png'
                alt=''
                className='hidden lg:block relative rounded-[16px] w-164'
              />
              <img className='flex mb-4 lg:hidden' src="/img/landmob.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
