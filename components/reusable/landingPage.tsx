import React from 'react';

export default function LandingPage() {
  return (
    <section
      dir='rtl'
      className='relative mb-4 lg:mb-5 overflow-hidden rounded-[12px]'
    >
      <div className='hidden lg:block absolute inset-0 w-full h-full overflow-hidden z-0'>
        <img
          src='/img/svg1.svg'
          className='absolute top-10 left-[30%] w-8 animate-float'
          style={{ animationDuration: '4s', animationDelay: '0s' }}
          alt='pic1'
        />
        <img
          src='/img/svg2.svg'
          className='absolute top-[60%] left-1/3 w-8 animate-float'
          style={{ animationDuration: '5s', animationDelay: '1s' }}
          alt='pic2'
        />
        <img
          src='/img/svg3.svg'
          className='absolute top-[80%] right-1/3 w-8 animate-float'
          style={{ animationDuration: '6s', animationDelay: '0.5s' }}
          alt='pic3'
        />
      </div>

      <div className='relative z-10 mx-3 lg:mx-20 px-1 lg:px-6 md:px-10 lg:py-12 pb-0 pt-12 md:py-16'>
        <div className='lg:grid grid-cols-1 flex flex-col-reverse lg:grid-cols-2 items-center'>
          <div>
            <h1 className='text-[16px] lg:text-[36px] leading-[1.35] font-bold text-secondary-900 mb-6'>
              تنها با چند کلیک، <span className='text-yellow-400'>سکه</span>{' '}
              موردنظر خود را با بهترین قیمت سفارش دهید و با بهترین قیمت بفروشید.
            </h1>

            <div className='lg:flex hidden items-center gap-3'>
              <a
                href='https://app.sekemohammad.com'
                className='bg-primary-300 text-white text-[15px] md:text-[16px] px-6 md:px-8 py-3 rounded-[16px] font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60'
              >
                ورود به اپلیکیشن
              </a>
            </div>
          </div>

          <div className='flex items-center justify-end'>
            <div className='relative will-change-transform'>
              <img
                src='/img/pic.svg'
                alt=''
                className='hidden lg:block relative rounded-[16px] w-164'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
