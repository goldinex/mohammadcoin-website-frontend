'use client';
import Image from 'next/image';

const steps = [
  'وارد سایت محمد گلد شوید و سکه موردنظر خود را انتخاب کنید.',
  'قیمت لحظه‌ای سکه  یا پارسیان یا شمش را بررسی کرده و سفارش خود را ثبت کنید.',
  'پس از ثبت سفارش، پرداخت خود را به‌صورت آنلاین انجام دهید.',
  'و در نهایت میتوانید خرید خود را در شعب معتبر ما دریافت کنید',
];

export default function HowItWorks() {
  return (
    <section className='py-1 lg:py-16'>
      <p className='text-[8px] lg:text-[18px] px-4 lg:px-36 mb-5'>
        در دنیای امروز، خرید و فروش طلا و سکه دیگر محدود به روش‌های سنتی نیست.
        با پیشرفت تکنولوژی، امکان خرید سکه طلا آنلاین به ساده‌ترین شکل ممکن
        فراهم شده است. در سکه محمد، شما می‌توانید با اطمینان کامل اقدام به خرید
        اینترنتی سکه طلا و سایر انواع سکه‌های بهار آزادی، نیم سکه و ربع سکه
        کنید.
      </p>
      <div className=' flex flex-col md:flex-row items-center gap-12 px-4 lg:px-36'>
        <div className='flex-1'>
          <h2 className='text-[13px] lg:text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-right'>
            فرآیند آسان خرید سکه , پارسیان و انواع شمش{' '}
          </h2>
          <img className='flex w-full  lg:hidden' src='/img/iPhonemobile.svg' alt='' />
          <ul className='space-y-6'>
            {steps.map((step, index) => (
              <li key={index} className='flex items-center gap-3 text-right'>
                <img src='/img/Check.svg' alt='تیک آبی' className='w-8 h-8' />
                <span className='text-gray-700 text-[9px] lg:text-lg'>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex-1  justify-center hidden lg:flex'>
          <Image
            src='/img/iphone.svg'
            alt='موکاپ موبایل'
            width={550}
            height={600}
            className='object-contain'
          />
        </div>
      </div>
    </section>
  );
}
