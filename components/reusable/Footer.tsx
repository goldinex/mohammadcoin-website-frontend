'use client';
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

export default function Footer() {

  return (
    <footer dir='rtl' className='w-full text-secondary-800 px-3 lg:px-6 mt-12'>
      <div className='bg-secondary-400 rounded-[10px] px-12 md:px-24 py-6 md:py-8'>
        <div className='flex flex-col lg:flex-row  items-center justify-between border-b border-[#959d7d] pb-3'>
          <div className='flex items-center bg-[#4d5633] rounded-[8px] pl-3'>
            <img className='w-32' src='/img/headerLogo.png' alt='logo' />
          </div>
          <div className='flex items-center gap-2 text-[13px] text-secondary-800'>
            <>
              <FaPhone className='text-secondary-800' />
            </>
            <span>09939409692</span>
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
            <div className='text-sm font-medium flex flex-col items-start  text-secondary-800 mb-3'>
              <p className='pb-2'> همراه با سکه محمد</p>
              <span className='w-10 h-1 rounded-[7px] bg-[#959d7d] block'></span>
            </div>
            <ul className='space-y-3 text-[13px] text-secondary-800'>
              <li>
                <a href='/#guid' className='hover:text-yellow-600 transition'>
                  راهنما
                </a>
              </li>
              <li>
                <a href='/about' className='hover:text-yellow-600 transition'>
                  درباره ما
                </a>
              </li>
              <li>
                <a href='/#faq' className='hover:text-yellow-600 transition'>
                  سوالات متداول
                </a>
              </li>
            </ul>
          </div>

          <div className='lg:block hidden'>
            <div className='text-sm font-medium flex flex-col items-start  text-secondary-800 mb-3'>
              <p className='pb-2'> لینک های کاربردی</p>
              <span className='w-10 h-1 rounded-[7px] bg-[#959d7d] block'></span>
            </div>
            <ul className='space-y-3 text-[13px] text-secondary-800'>
              <li>
                <a
                  href='https://app.sekemohammad.com/'
                  className='hover:text-yellow-600 transition'
                >
                  ورود به پنل
                </a>
              </li>
              <li>
                <a href='/about' className='hover:text-yellow-600 transition'>
                  پشتیبانی
                </a>
              </li>
            </ul>
          </div>

          <div className='lg:block hidden'>
            <div className='text-sm font-medium flex flex-col items-start  text-secondary-800 mb-3'>
              <p className='pb-2'> خدمات اصلی سکه محمد</p>
              <span className='w-10 h-1 rounded-[7px] bg-[#959d7d] block'></span>
            </div>
            <ul className='space-y-3 text-[13px] text-secondary-800'>
              <li>
                <a
                  href='https://app.sekemohammad.com/'
                  className='hover:text-yellow-600 transition'
                >
                  خرید و فروش سکه
                </a>
              </li>
              <li>
                <a
                  href='https://app.sekemohammad.com/'
                  className='hover:text-yellow-600 transition'
                >
                  {' '}
                  خرید و فروش انواع پارسیان
                </a>
              </li>
              <li>
                <a
                  href='https://app.sekemohammad.com/'
                  className='hover:text-yellow-600 transition'
                >
                  خرید و فروش انواع شمش
                </a>
              </li>
            </ul>
          </div>

          <div className='flex flex-col items-center lg:items-end'>
            <div className='text-sm font-medium flex flex-col items-start  text-secondary-800 mb-3'>
              <p className='pb-2'> اعتماد شما سرمایه ماست</p>
              <span className='w-10 h-1 rounded-[7px] bg-[#959d7d] block'></span>
            </div>
            <div className='flex w-[25%] border border-[#4d5633] rounded-[8px] bg-[#4d5633] p-2 items-center gap-4'>
              <a
                referrerPolicy='origin'
                target='_blank'
                href='https://trustseal.enamad.ir/?id=648055&Code=vrk1eUGrbNSBdm8dxyFpo23UYCi280B7'
              >
                <img
                  referrerPolicy='origin'
                  src='https://trustseal.enamad.ir/logo.aspx?id=648055&Code=vrk1eUGrbNSBdm8dxyFpo23UYCi280B7'
                  alt='نماد اعتماد الکترونیکی'
                  style={{ cursor: 'pointer' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-secondary-400 flex justify-between items-center rounded-[10px] px-2 lg:px-24 py-5 mt-3 text-center text-[11px] text-secondary-700'>
        <p className='text-[6px] lg:text-[14px]'>
          {' '}
          کلیه حقوق مادی و معنوی این وب‌سایت متعلق به علیرضا طرشتی‌نژاد می‌باشد و هرگونه
          کپی‌برداری پیگرد قانونی دارد.{' '}
        </p>
        <span className='text-[6px] lg:text-[12px]'>
          <a href='https://goldinex.org'> ساخته شده توسط تیم گلدینکس</a>
        </span>
      </div>
    </footer>
  );
}
