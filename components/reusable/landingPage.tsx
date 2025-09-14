import React from 'react';

export default function LandingPage() {
  return (
    <section dir='rtl' className='relative mb-20 overflow-hidden rounded-[12px]'>
      {/* Decorative gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary-200 via-secondary-200 to-white' />
      <div className='absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary-300/20 blur-3xl' />
      <div className='absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-success-500/10 blur-3xl' />

      <div className='relative z-10  mx-20 px-6 md:px-10 py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
          <div>
            <h1 className='text-[28px] md:text-[36px] leading-[1.35] font-bold text-secondary-900 mb-6'>
              تنها با چند کلیک، سکه موردنظر خود را با بهترین قیمت سفارش دهید و با بهترین قیمت بفروشید.
            </h1>
            <p className='text-secondary-700 text-[14px] md:text-[16px] mb-8'>
              تجربه‌ای سریع، امن و شفاف در خرید و فروش آنلاین سکه و پارسیان.
            </p>
            <div className='flex items-center gap-3'>
              <button className='bg-primary-300 text-white text-[15px] md:text-[16px] px-6 md:px-8 py-3 rounded-[16px] font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60'>
                ورود به اپلیکیشن
              </button>
              <button className='text-primary-500 text-[14px] md:text-[15px] px-4 py-3 rounded-[16px] border border-primary-500 transition-all duration-300 hover:bg-primary-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60'>
                آشنایی با خدمات
              </button>
            </div>

          </div>

          <div className='flex items-center justify-end'>
            <div className='relative will-change-transform' style={{ animation: 'floatY 6s ease-in-out infinite' }}>
              <div className='absolute -inset-6 rounded-[20px] bg-gradient-to-tr from-primary-300/20 to-success-500/10 blur-2xl' />
              <img src='/img/img1.svg' alt='' className='relative rounded-[16px] max-h-[360px]' />
            </div>
          </div>
        </div>

        {/* small motion accent under CTAs */}
        <div className='mt-8 h-[2px] w-44 bg-gradient-to-r from-primary-400/50 to-transparent relative overflow-hidden'>
          <span className='absolute -top-[6px] -left-2 w-3 h-3 rounded-full bg-primary-400/70' style={{ animation: 'pulseDot 1.8s ease-in-out infinite' }} />
          <span className='absolute inset-y-0 -left-16 w-16 bg-gradient-to-r from-white/0 via-white/40 to-white/0' style={{ animation: 'shimmer 3s linear infinite' }} />
        </div>
      </div>
      <style jsx>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(0.5); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(0); }
          100% { transform: translateX(220%); }
        }
      `}</style>
    </section>
  );
}
