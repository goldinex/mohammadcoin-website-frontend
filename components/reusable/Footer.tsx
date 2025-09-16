'use client';

import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export default function Footer() {
  return (
    <footer dir='rtl' className='w-full text-secondary-800 px-3 lg:px-6 mt-12'>
      <div className='bg-secondary-400 rounded-[10px] px-12 md:px-24 py-6 md:py-8'>
        {/* Top row: logo - phone - email */}
        <div className='flex flex-col lg:flex-row  items-center justify-between'>
          <div className='flex items-center'>
            <img className='w-28' src='/img/headerLogo.png' alt='logo' />
          </div>
          <div className='flex items-center gap-2 text-[13px] text-secondary-800'>
            <>
              <FaPhone className='text-secondary-800' />
            </>
            <span>09000000000</span>
          </div>
          <div className='flex items-center gap-2 text-[13px] text-secondary-800'>
            <IoMail className='text-secondary-800' />
            <span>info@sekehmohammad.com</span>
          </div>
        </div>

        <div className='my-5 h-px bg-[#aab69d]' />

        {/* Middle 4 columns (RTL: right to left order) */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-right'>
          <div className='lg:block hidden'>
            <div className='text-sm font-medium   text-secondary-800 mb-3'>
              <span className='border-b w-5 h-2 border-[#000]'></span>
              همراه با سکه محمد
            </div>
            <ul className='space-y-3 text-[13px] text-secondary-800'>
              <li>راهنما</li>
              <li>درباره ما</li>
              <li>سوالات متداول</li>
            </ul>
          </div>

          {/* 2) لینک های کاربردی */}
          <div className='lg:block hidden'>
            <div className='text-sm font-medium text-secondary-800 mb-3'>
              لینک های کاربردی
            </div>
            <ul className='space-y-3 text-[13px] text-secondary-800'>
              <li>ورود به پنل</li>
              <li>پشتیبانی</li>
            </ul>
          </div>

          {/* 3) خدمات اصلی سکه محمد */}
          <div className='lg:block hidden'>
            <div className='text-sm font-medium text-secondary-800 mb-3'>
              خدمات اصلی سکه محمد
            </div>
            <ul className='space-y-3 text-[13px] text-secondary-800'>
              <li>خرید و فروش سکه</li>
              <li>خرید و فروش انواع پارسیان</li>
              <li>خرید و فروش انواع شمش</li>
            </ul>
          </div>

          {/* 4) Leftmost: اعتماد شما سرمایه ماست */}
          <div className='flex flex-col items-center md:items-start'>
            <div className='text-xs text-secondary-800 mb-3'>
              اعتماد شما سرمایه ماست
            </div>
            {/* <div className="flex items-center gap-4">
              <img src="/img/zarinpal.png" alt="زرین‌پال" />
              <img src="/img/namad.png" alt="نماد اعتماد" />
            </div> */}
            {/* <div className="text-[11px] text-secondary-800 mt-2">برای اعتبار سنجی کلیک نمایید</div> */}
          </div>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className='bg-secondary-400 flex justify-between items-center rounded-[10px] px-2 lg:px-24 py-5 mt-3 text-center text-[11px] text-secondary-700'>
        <p className='text-[6px] lg:text-[14px]'>
          {' '}
          کلیه حقوق مادی و معنوی این وب‌سایت متعلق به سکه محمد می‌باشد و هرگونه
          کپی‌برداری پیگرد قانونی دارد.{' '}
        </p>
        <span className='text-[6px] lg:text-[12px]'>
          ساخته شده توسط تیم گلدینکس
        </span>
      </div>
    </footer>
  );
}
