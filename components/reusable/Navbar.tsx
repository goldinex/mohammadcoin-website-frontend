'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const GoldPrice = dynamic(() => import('@/components/reusable/GoldPrice'), {
  ssr: false,
});

const links = [
  { href: '/#pricesTable', label: 'قیمت لحظه‌ای' },
  { href: '/about', label: 'درباره ی ما' },
  { href: '/#faq', label: 'سوالات متداول' },
  { href: '#', label: 'پشتیبانی' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div dir='ltr' className='px-[3%]'>
      <div className='w-[96%] mx-auto flex justify-between items-center py-4 text-neutral-900'>
        <div className='lg:hidden'>
          <a
            href='https://app.sekemohammad.com'
            className='bg-primary-300 text-[#0E171F] px-6 py-2 rounded-[16px] text-sm hover:bg-yellow-500'
          >
            ورود
          </a>
        </div>

        <div className='hidden lg:block'>
          <a
            href='https://app.sekemohammad.com'
            className='bg-primary-300 text-[#0E171F] px-6 py-2 rounded-[16px] font-medium hover:bg-yellow-500'
          >
            ورود و ثبت‌نام
          </a>
        </div>

        <div className='flex items-center flex-1 lg:justify-end justify-center'>
          <div dir='rtl' className='hidden lg:flex gap-8 text-[16px]'>
            {links.map((l) => (
              <a key={l.href} href={l.href} className='text-[16px] hover:text-yellow-400'>
                {l.label}
              </a>
            ))}
          </div>
          <div className='w-16 ml-0 lg:ml-20'>
            <Link href='/'>
              <img src='/img/logo3.svg' alt='لوگو' className=' cursor-pointer' />
            </Link>
          </div>
        </div>

        <button className='lg:hidden ml-4' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#FAF6CF] shadow-lg transform transition-transform duration-300 z-50 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex justify-between items-center p-4 border-b border-[#E6CE71]'>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
          <span className='font-bold text-lg'>سکه محمد</span>
        </div>
        <div className='flex flex-col p-4 space-y-4 text-[15px] text-end'>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className='hover:text-yellow-400 border-b border-[#E6CE71] pb-3'
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <GoldPrice />
    </div>
  );
}
