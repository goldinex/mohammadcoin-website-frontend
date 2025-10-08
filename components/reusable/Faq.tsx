'use client';

import React, { useState } from 'react';
import Head from 'next/head';

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const DATA: FaqItem[] = [
  {
    id: 'q1',
    question: 'سکه محمد چیست؟',
    answer:
      'سکه محمد یک پلتفرم کامل برای خرید و فروش امن و لحظه ای انواع سکه بانکی،شمش و سکه پارسیان میباشد، اما تمایز اصلی ما در بیش از ۳۵ سال سابقه درخشان در بازار فیزیکی طلا است ؛ ما اعتبار سنتی خود را به آسایش خرید آنلاین اورده ایم.',
  },
  {
    id: 'q2',
    question: 'خدمات اصلی سکه محمد چیست؟',
    answer:
      'در سکه محمد خدمات ما فراتر از خرید و فروش است، مشاوره رایگان سرمایه گذاری در حوزه طلا و سکه، ارائه نرخ لحظه ای و نمودار های مختلف و امکان مقایسه قیمت ها ،خرید و فروش امن و معتبر، ارسال امن سفارش ها با کمترین هزینه.',
  },
  {
    id: 'q3',
    question: 'خرید و فروش سکه به چه صورت است؟',
    answer:
      'این فرایند در سکه محمد بسیار ساده و شفاف است : ۱.مشاهده و مقایسه قیمت ها ۲.انتخاب محصول مورد نظر ۳.شارژ کیف پول از طریق درگاه پرداخت امن ما ۴.دریافت فاکتور و تاییدیه معامله ۵.تحویل در شعب معتبر ما و یا در محل مورد نظر شما',
  },
  {
    id: 'q6',
    question: 'مزایای سکه محمد؟',
    answer:
      '۱. ۳۵ سال اعتباروسابقه درخشان ۲. ضمانت اصالت کالا و ارائه فاکتور معتبر ۳.قیمت های شفاف و رقابتی ۴.کمترین کارمزد ممکن در معاملات ... سکه محمد فقط یک فروشگاه نیست، یک همراه قابل اعتماد در مسیر سرمایه گذاری طلا میباشد.',
  },
  {
    id: 'q7',
    question: 'خدمات و پشتیبانی سکه محمد چطور است؟',
    answer:
      'ما باور داریم که ارزشمند ترین دارایی هر کسب و کار، مشتریان  می باشند قبل و بعد از خرید چه به صورت تلفنی و چه به صورت آنلاین، پاسخگوی تمام سوالات شما عزیزان خواهیم بود.',
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section dir='rtl' className='w-full px-4 lg:px-0 py-2'>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: DATA.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </Head>
      <h3 className='text-right lg:text-center text-[18px] md:text-[20px] font-medium text-gray-800 mb-6'>
        سوالات متداول
      </h3>

      <div className='mx-auto max-w-6xl space-y-4'>
        {DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className='rounded-[10px] bg-[#E8DDA4]'>
              <button
                type='button'
                onClick={() => toggle(item.id)}
                className='w-full flex items-center justify-between px-4 md:px-6 py-4'
              >
                <span className='text-[16px] md:text-[18px] text-gray-800'>
                  {item.question}
                </span>
                <span className='w-6 h-6 flex items-center justify-center text-lg text-gray-800'>
                  {isOpen ? '–' : '+'}
                </span>
              </button>
              <div
                className={`bg-[#FDFDFD] overflow-hidden transition-[max-height] duration-300 ${
                  isOpen ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className='px-4 md:px-6 pt-3 border-[#DCE3E8] pb-4 text-[13px] lg:text-[18px] text-gray-700'>
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
