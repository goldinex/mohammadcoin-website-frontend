import Image from 'next/image';

export default function LandingPage() {
  return (
    <section
      dir='rtl'
      className='relative mb-4 lg:mb-5 overflow-hidden min-h-[400px] lg:min-h-[626px] rounded-[12px]'
    >
      <div className='hidden lg:block absolute inset-0 w-full h-full overflow-hidden z-0'>
        <img
          src='/img/svg1.svg'
          className='absolute top-10 left-[30%] w-8 animate-float'
          style={{ animationDuration: '4s', animationDelay: '0s' }}
          alt=''
        />
        <img
          src='/img/svg2.svg'
          className='absolute top-[70%] left-1/3 w-8 animate-float'
          style={{ animationDuration: '5s', animationDelay: '1s' }}
          alt=''
        />
        <img
          src='/img/svg3.svg'
          className='absolute top-[80%] right-1/3 w-8 animate-float'
          style={{ animationDuration: '6s', animationDelay: '0.5s' }}
          alt=''
        />
      </div>

      <div className='relative z-10 mx-3 lg:mx-20 px-1 lg:px-6 md:px-10 pb-0'>
        <div className='lg:grid grid-cols-1 flex flex-col-reverse lg:grid-cols-2 items-center'>
          <div
            className={`transition-all duration-[1000ms] ease-out
             `}
          >
            <h1 className='text-[16px] text-center lg:text-right lg:w-[88%] w-full lg:text-[26px] font-bold text-secondary-900 mb-6 tracking-[0.2px] leading-[32px]'>
              بازار <span className='text-yellow-400'>طلا و سکه</span> در جیب
              شما
            </h1>
            <h2 className='text-[16px] lg:w-[88%] w-full lg:text-[26px] font-bold text-secondary-900 mb-6 tracking-[0.2px] leading-[1.6] text-center lg:text-right'>
              تنها با چند کلیک از سرمایه خود محافظت کنید. با بهترین قیمت و در
              سریع ترین زمان خرید و فروش کنید.
            </h2>
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
            <div
              className={`relative will-change-transform transition-all duration-[1200ms] ease-out`}
            >
              <Image
                src='/img/main.png'
                alt='نمای اپلیکیشن خرید و فروش طلا'
                width={740}
                height={626}
                priority
                className='block relative rounded-[16px]'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
