'use client';
import Image from 'next/image';

const steps = [
  'وارد سایت سکه محمد شوید و سکه موردنظر خود را انتخاب کنید.',
  'قیمت لحظه‌ای سکه  یا پارسیان یا شمش را بررسی کرده و سفارش خود را ثبت کنید.',
  'به صورت انلاین و از طریق درگاه پرداخت امن و معتبر ما کیف پول خود را شارژ و سفارش خودرا نهایی کنید.',
  'در نهایت میتوانید خرید خودرا در شعب معتبر ما به طور فیزیکی دریافت کنید و یا در صورت تمایل درکوتاه ترین زمان و با کمترین هزینه در محل مورد نظر خود تحویل بگیرید.',
];

export default function HowItWorks() {
  return (
    <section className='py-1 lg:py-16'>
      <p className='text-[8px] lg:text-[18px] px-4 lg:px-28 mb-5'>
        در سکه محمد مرز های سنتی خرید طلارا شکسته ایم . ما یک پلتفرم ساده
        نیستیم،ما ضامن امنیت مالی شما در فضای دیجیتال هستیم . پس از تجربه شیرین
        سالیان متمادی ارائه خدمات حضوری به مشتریان عزیز، اکنون با تضمین صد در
        صدی اصالت و ارائه فاکتور رسمی برای هر خرید (انواع سکه های بانکی ،سکه های
        پارسیان و انواع شمش طلا )،سرمایه گذاری شمارا در یک بستر امن و شفاف هدایت
        میکنیم . خرید سکه و طلای انلاین بااااید امن باشد ،ما این بااااید را به
        واقعیت تبدیل کرده ایم
      </p>
      <div className=' flex flex-col md:flex-row items-center gap-12 px-4 lg:px-28'>
        <div className='lg:w-[55%] w-full'>
          <h2 className='text-[13px] lg:text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-right'>
            فرآیند آسان خرید سکه , پارسیان و انواع شمش{' '}
          </h2>
          <img
            className='flex w-full  lg:hidden'
            src='/img/iPhonemobile.svg'
            alt=''
          />
          <ul className='space-y-6 pr-5'>
            {steps.map((step, index) => (
              <li key={index} className='flex items-center gap-3 text-right'>
                <img src='/img/Check.svg' alt='تیک آبی' className='w-8 h-8' />
                <span className='text-gray-700 text-[9px] lg:text-lg'>
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className=' justify-center hidden lg:flex'>
          <Image
            src='/img/iPhone.svg'
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
