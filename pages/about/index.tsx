import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Head from 'next/head';
import { FaPhone } from 'react-icons/fa';

export default function Index() {
  const branchesSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'سکه محمد - شعبه 1',
      image: 'https://www.sekemohammad.com/logo.svg',
      url: 'https://www.sekemohammad.com/',
      telephone: '+98-21-46142091',
      email: 'info@sekehmohammad.com',
      description:
        'پلتفرم سکه محمد مرجع آنلاین خرید و فروش طلا، سکه و شمش با بالاترین شفافیت و امنیت در ایران است.',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'تهران، بین فلکه اول و دوم صادقیه، نبش مجتمع تجاری زرناب، پلاک ۱',
        addressLocality: 'Tehran',
        addressCountry: 'IR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'سکه محمد - شعبه 2',
      image: 'https://www.sekemohammad.com/logo.svg',
      url: 'https://www.sekemohammad.com/',
      telephone: '+98-21-44227655',
      email: 'info@sekehmohammad.com',
      description: 'شعبه سکه محمد برای خرید و فروش سکه و طلا در صادقیه تهران.',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'تهران، صادقیه، بین فلکه اول و دوم، پاساژ کیمیا، طبقه زیرین، پلاک ۶',
        addressLocality: 'Tehran',
        addressCountry: 'IR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'سکه محمد - شعبه  3',
      image: 'https://www.sekemohammad.com/logo.svg',
      url: 'https://www.sekemohammad.com/',
      telephone: '+98-21-46142267',
      email: 'info@sekehmohammad.com',
      description: 'شعبه سکه محمد در پاساژ زرناب جهت خرید و فروش سکه و شمش.',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'تهران، صادقیه، بین فلکه اول و دوم، پاساژ زرناب، طبقه منفی یک، پلاک B2',
        addressLocality: 'Tehran',
        addressCountry: 'IR',
      },
    },
  ];

  return (
    <div className='bg-[#fffffb]'>
      <Head>
        <title>درباره سکه محمد | پلتفرم خرید و فروش امن سکه وشمش</title>
        <meta
          name='description'
          content='سکه محمد؛ مرجع امن خرید و فروش طلا و سکه. ارائه مشاوره رایگان سرمایه‌گذاری، نرخ لحظه‌ای، نمودار و مقایسه قیمت‌ها با ارسال سریع و مطمئن سفارش‌ها.'
        />
        <link rel='canonical' href='https://www.sekemohammad.com/about' />
        <meta name='robots' content='index, follow' />
      </Head>
      <div className='relative flex mt-10 justify-center mx-auto w-full'>
        <img src='/img/border.svg' alt='' />
        <p className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13px] lg:text-[26px] text-black font-bold'>
          درباره ما
        </p>
      </div>

      <div className='hidden lg:flex justify-center mt-10'>
        <div className="relative w-[73%] h-[185vh] bg-[url('/img/bg.png')] bg-cover bg-center">
          <div className='absolute top-[20%] left-3/4 transform -translate-x-1/2 w-11/12 md:w-2/3 lg:w-1/2 px-4 md:px-8'>
            <p className='text-[18px] text-[#1C2B36]'>
              سکه محمد میراث‌دار ۳۵ سال سابقه درخشان در بازار طلا است جایی که
              مدیران مجموعه ،اقایان محمد طرشتی نژاد و محمد حسن حسینمردی پس از
              تجربه موفق و کسب اعتبار بازار حضوری و فیزیکی طلا تصمیم بر ان
              گرفتند که اعتبار سنتی را با آسایش خرید و فروش آنلاین تلفیق کرده و
              پا به دنیای کسب و کار مجازی بگذارند.
            </p>
            <p className='text-[18px] text-[#1C2B36]'>
              ما با افتخار تاکید می‌کنیم که هر سه شعبه فیزیکی ما دارای مجوز رسمی
              اتحادیه طلا و جواهر تهران و همچنین سند مالکیت کامل میباشد ، که
              تضمین‌کننده بالاترین سطح قانونی بودن و اصالت ۱۰۰٪ محصولات است.
            </p>
            <p className='text-[18px] text-[#1C2B36]'>
              شما در سکه محمد یک نهاد مالی ریشه‌دار را انتخاب می‌کنید که اصالت
              هر سکه، شمش یا پارسیان را با فاکتور رسمی تضمین می‌کند.
            </p>
            <p className='text-[18px] text-[#1C2B36]'>
              ما فرآیند را ساده کرده‌ایم: از شفافیت قیمت‌های لحظه‌ای و امکان
              مقایسه انلاین تا مزیت منحصربه‌فرد خرید و فروش دوطرفه که نقدشوندگی
              سرمایه شما را در هر لحظه تضمین می‌کند.
            </p>
            <p className='text-[18px] text-[#1C2B36]'>
              با تیم کارشناسان باتجربه ما، در مسیر سرمایه‌گذاری خود تنها نخواهید
              بود؛ امروز با اطمینان کامل به جمع مشتریان سکه محمد بپیوندید.
            </p>
            <div className='flex mt-10 items-start'>
              <HiOutlineLocationMarker size={30} className='ml-3' />
              <p className='m-0 text-[18px]'>
                {' '}
                آدرس شعبه ۱: تهران، بین فلکه اول و دوم صادقیه، نبش مجتمع تجاری
                زرناب، پلاک ۱
              </p>
            </div>
            <div className='flex mt-2 items-start'>
              <FaPhone className='ml-3' />
              <p className='text-[18px]'>021-46142091</p>
            </div>
            <div className='flex mt-10 items-start'>
              <HiOutlineLocationMarker size={30} className='ml-3' />
              <p className='m-0 text-[18px]'>
                {' '}
                آدرس شعبه ۲: صادقیه-بین فلکه اول و دوم-پاساژ کیمیا-طبقه زیرین
                -پلاک۶
              </p>
            </div>
            <div className='flex mt-2 items-start'>
              <FaPhone className='ml-3' />
              <p className='text-[18px]'>021-44227655</p>
            </div>
            <div className='flex mt-10 items-start'>
              <HiOutlineLocationMarker size={30} className='ml-3' />
              <p className='m-0 text-[18px]'>
                {' '}
                آدرس شعبه ۳: صادقیه -بین فلکه اول و دوم-پاساژ زرناب -طبقه منفی
                یک- پلاک b2
              </p>
            </div>
            <div className='flex mt-2 items-start'>
              <FaPhone className='ml-3' />
              <p className='text-[18px]'>021-46142267</p>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:hidden flex justify-center mt-10'>
        <div className="relative w-full h-[70vh] bg-[url('/img/bg-mob.png')] bg-cover bg-center">
          <div className='absolute top-[2%] left-[65%] transform -translate-x-1/2 w-8/12 md:w-2/3 lg:w-1/2 px-4 md:px-8'>
            <p className='text-[10px] text-[#1C2B36]'>
              سکه محمد میراث‌دار ۳۵ سال سابقه درخشان در بازار طلا است جایی که
              مدیران مجموعه ،اقایان محمد طرشتی نژاد و محمد حسن حسینمردی پس از
              تجربه موفق و کسب اعتبار بازار حضوری و فیزیکی طلا تصمیم بر ان
              گرفتند که اعتبار سنتی را با آسایش خرید و فروش آنلاین تلفیق کرده و
              پا به دنیای کسب و کار مجازی بگذارند.
            </p>
            <p className='text-[10px] text-[#1C2B36]'>
              ما با افتخار تاکید می‌کنیم که هر سه شعبه فیزیکی ما دارای مجوز رسمی
              اتحادیه طلا و جواهر تهران و همچنین سند مالکیت کامل میباشد ، که
              تضمین‌کننده بالاترین سطح قانونی بودن و اصالت ۱۰۰٪ محصولات است.
            </p>
            <p className='text-[10px] text-[#1C2B36]'>
              شما در سکه محمد یک نهاد مالی ریشه‌دار را انتخاب می‌کنید که اصالت
              هر سکه، شمش یا پارسیان را با فاکتور رسمی تضمین می‌کند.
            </p>
            <p className='text-[10px] text-[#1C2B36]'>
              ما فرآیند را ساده کرده‌ایم: از شفافیت قیمت‌های لحظه‌ای و امکان
              مقایسه انلاین تا مزیت منحصربه‌فرد خرید و فروش دوطرفه که نقدشوندگی
              سرمایه شما را در هر لحظه تضمین می‌کند.
            </p>
            <p className='text-[10px] text-[#1C2B36]'>
              با تیم کارشناسان باتجربه ما، در مسیر سرمایه‌گذاری خود تنها نخواهید
              بود؛ امروز با اطمینان کامل به جمع مشتریان سکه محمد بپیوندید.
            </p>
            <div className='flex mt-5 items-start'>
              <HiOutlineLocationMarker size={30} className='ml-3' />
              <p className='m-0 text-[10px]'>
                {' '}
                آدرس شعبه ۱: تهران، بین فلکه اول و دوم صادقیه، نبش مجتمع تجاری
                زرناب، پلاک ۱
              </p>
            </div>
            <div className='flex mt-2 items-start'>
              <FaPhone className='ml-3' />
              <p className='text-[10px]'>021-46142091</p>
            </div>
            <div className='flex mt-10 items-start'>
              <HiOutlineLocationMarker size={30} className='ml-3' />
              <p className='m-0 text-[10px]'>
                {' '}
                آدرس شعبه ۲: صادقیه-بین فلکه اول و دوم-پاساژ کیمیا-طبقه زیرین
                -پلاک۶
              </p>
            </div>
            <div className='flex mt-2 items-start'>
              <FaPhone className='ml-3' />
              <p className='text-[10px]'>021-44227655</p>
            </div>
            <div className='flex mt-10 items-start'>
              <HiOutlineLocationMarker size={30} className='ml-3' />
              <p className='m-0 text-[10px]'>
                {' '}
                آدرس شعبه ۳: صادقیه -بین فلکه اول و دوم-پاساژ زرناب -طبقه منفی
                یک- پلاک b2
              </p>
            </div>
            <div className='flex mt-2 items-start'>
              <FaPhone className='ml-3' />
              <p className='text-[10px]'>021-46142267</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
