"use client";

import React, { useState } from 'react'

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const DATA: FaqItem[] = [
  { id: 'q1', question: 'سکه محمد چیست؟', answer: 'سرویسی برای خرید و فروش آنلاین سکه و طلای پارسیان.' },
  { id: 'q2', question: 'خدمات اصلی سکه محمد چیست؟', answer: 'امکان مشاهده قیمت لحظه‌ای، خرید/فروش و پیگیری سفارشات.' },
  { id: 'q3', question: 'خرید و فروش سکه به چه صورت است؟', answer: 'با انتخاب محصول، تعیین تعداد و پرداخت آنلاین انجام می‌شود.' },
  { id: 'q4', question: 'خرید و فروش پارسیان به چه صورت است؟', answer: 'مشابه سکه؛ بر اساس وزن و عیار پارسیان قابل سفارش است.' },
  { id: 'q5', question: 'خرید و فروش شمش به چه صورت است؟', answer: 'انتخاب وزن شمش و تعداد؛ قیمت روز محاسبه و ثبت سفارش می‌شود.' },
  { id: 'q6', question: 'مزایای سکه محمد؟', answer: 'سرعت، شفافیت قیمت، و پشتیبانی تخصصی.' },
  { id: 'q7', question: 'خدمات و پشتیبانی سکه محمد چطور است؟', answer: 'از طریق تلفن و چت آنلاین همه‌روزه پاسخگو هستیم.' },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section dir="rtl" className="w-full px-4 lg:px-0 py-10">
      <h3 className="text-center text-[18px] md:text-[20px] font-medium text-gray-800 mb-6">سوالات متداول</h3>

      <div className="mx-auto max-w-6xl space-y-4">
        {DATA.map(item => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="rounded-[10px] bg-[#E8DDA4]">
              <button type="button" onClick={() => toggle(item.id)} className="w-full flex items-center justify-between px-4 md:px-6 py-4">
                <span className="text-sm md:text-base text-gray-800">{item.question}</span>
                <span className="w-6 h-6 flex items-center justify-center text-lg text-gray-800">{isOpen ? '–' : '+'}</span>
              </button>
              <div className={`bg-[#FDFDFD] overflow-hidden transition-[max-height] duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <div className="px-4 md:px-6 pt-3 border-[#DCE3E8] pb-4 text-[13px] md:text-[14px] text-gray-700">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}