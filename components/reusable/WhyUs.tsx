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
      image: '/img/Trust.svg',
      title: 'اعتماد و اعتبار',
      desc: 'سکه محمد   دارای تمام مجوز های لازم از اتحادیه طلا و جواهر و سند مالکیت کامل تمام شعب میباشد .',
    },
    {
      image: '/img/coin.svg',
      title: 'ضمانت اصالت سکه‌ها/شمش ها و پارسیان ها:',
      desc: 'تمامی اجناس دارای اصالت تضمین‌شده هستند.',
    },
    {
      image: '/img/courier.svg',
      title: 'تحویل فیزیکی:',
      desc: 'تحویل سکه‌, شمش و پارسیان در شعب معتبر سکه محمد و یا ارسال در سریع‌ترین زمان و باکمترین هزینه',
    },
    {
      image: '/img/best-price.svg',
      title: 'قیمت‌های به‌روز:',
      desc: 'امکان بررسی لحظه‌ای قیمت‌ها برای بهترین تصمیم‌گیری.',
    },
    {
      image: '/img/gold.svg',
      title: 'تنوع در محصولات:',
      desc: 'امکان خرید اینترنتی سکه بهار آزادی، نیم‌سکه، ربع‌سکه و سکه گرمی و... شمش طلا و انواع پارسیان.',
    },
    {
      image: '/img/support.svg',
      title: 'پشتیبانی حرفه‌ای:',
      desc: 'تیم پشتیبانی محمد گلد آماده پاسخگویی به تمامی سوالات شما است.',
    },
  ];

  return (
    <section className='py-16 px-4 bg-white' dir='rtl'>
      <h2 className='text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12'>
        چرا سکه محمد؟
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        {features.map((item) => (
          <div
            key={item.title}
            className='
              flex flex-row-reverse items-center justify-between text-right
              bg-[#fdfdfd] rounded-[10px] p-4 lg:border-none border border-secondary-300 w-full
              md:flex-col md:items-center md:text-center md:justify-start
            '
          >
            {item.image && (
              <div className='flex items-center justify-center mb-0 md:mb-3 md:h-20'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className='h-16 w-16 object-contain'
                />
              </div>
            )}

            <div className='flex flex-col text-right md:text-center md:mt-2 flex-1'>
              <h3 className='text-[14px] lg:text-base font-semibold text-gray-800 mb-1 md:mb-2 md:min-h-[48px]'>
                {item.title}
              </h3>
              <p className='text-[12px] lg:text-sm text-gray-600'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className='text-gray-700 text-[14px] lg:text-[18px] md:text-base leading-8 mt-8 lg:mt-14 text-right px-4 lg:px-28'>
        علاوه بر خرید، سکه محمد امکان فروش اینترنتی سکه طلا/شمش/پارسیان را نیز
        برای کاربران فراهم کرده است. اگر قصد فروش سکه‌های خریداری شده از این
        پلتفرم را دارید، می‌توانید با قیمت مناسب و بدون واسطه در کمترین زمان
        معامله خود را انجام دهید. این ویژگی باعث می‌شود که بازار سکه همیشه در
        دسترس و شفاف باشد.
      </p>
    </section>
  );
}
