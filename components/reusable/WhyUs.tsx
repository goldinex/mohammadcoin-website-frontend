'use client';
import Image from 'next/image';

type FeatureItem = {
  icon?: string;
  image?: string;
  title: string;
  desc: string;
};

export default function WhyUs() {
  const features: FeatureItem[] = [
    {
      image: '/img/coin.svg',
      title: 'ضمانت اصالت سکه‌ها/شمش ها و پارسیان ها:',
      desc: ' تمامی اجناس دارای اصالت تضمین‌شده هستند.',
    },
    {
      image: '/img/courier.svg',
      title: 'تحویل فیزیکی:',
      desc: 'تحویل سکه‌, شمش و پارسیان در شعب معتبر سکه محمد.',
    },
    {
      image: '/img/best-price.svg',
      title: 'قیمت‌های به‌روز:',
      desc: 'امکان بررسی لحظه‌ای قیمت‌ها برای بهترین تصمیم‌گیری.',
    },
    {
      image: '/img/gold.svg',
      title: 'تنوع در محصولات:',
      desc: 'امکان خرید اینترنتی سکه بهار آزادی، نیم‌سکه، ربع‌سکه و سکه گرمی و... شمش طلا و انواع پارسیان.',
    },
    {
      image: '/img/support.svg',
      title: 'پشتیبانی حرفه‌ای:',
      desc: ' تیم پشتیبانی محمد گلد آماده پاسخگویی به تمامی سوالات شما است.',
    },
  ];

  return (
    <section className="py-16 px-4 bg-white" dir="rtl">
    <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
      چرا سکه محمد؟
    </h2>
  
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {features.map((item) => (
        <div
          key={item.title}
          className="flex flex-row-reverse lg:flex-col items-center justify-between lg:text-center bg-[#fdfdfd] lg:bg-transparent rounded-[10px] p-4 lg:border-none border border-secondary-300 w-full"
        >
          {item.image && (
            <Image
              src={item.image}
              alt={item.title}
              width={64}
              height={64}
              className="mb-0 lg:mb-4 h-16 w-16 object-contain"
            />
          )}
          <div className="flex flex-col text-right lg:text-center lg:mt-2">
            <h3 className="text-[11px] lg:text-base font-semibold text-gray-800 mb-1 lg:mb-2">
              {item.title}
            </h3>
            <p className="text-[9px] lg:text-sm text-gray-600">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  
    <p className="text-gray-700 text-[10px] lg:text-[18px] md:text-base leading-8 mt-8 lg:mt-14 text-right">
      علاوه بر خرید، محمد گلد امکان فروش اینترنتی سکه طلا/شمش/پارسیان را نیز
      برای کاربران فراهم کرده است. اگر قصد فروش سکه‌های خود را دارید،
      می‌توانید با قیمت مناسب و بدون واسطه در کمترین زمان معامله خود را
      انجام دهید. این ویژگی باعث می‌شود که بازار سکه همیشه در دسترس و شفاف
      باشد.
    </p>
  </section>
  
  );
}
