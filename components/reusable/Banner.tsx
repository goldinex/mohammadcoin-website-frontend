"use client";

import React from "react";

export default function Banner() {
  return (
    <section dir="rtl" className="w-full mt-40 mb-4">
      <div className="bg-[#F3F5F0] rounded-[8px] px-6 py-10 md:py-14 w-screen relative left-1/2 right-1/2 -ml-[51vw] -mr-[51vw] overflow-x-hidden">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div className="text-center md:text-right">
            <h2 className="text-[32px] md:text-2xl font-semibold text-gray-800 mb-3">خرید و فروش آنی</h2>
            <p className="text-[32px] md:text-base text-gray-700">راحت بخر و آسان بفروش</p>
          </div>
          <div className="flex items-center justify-center order-1 md:order-none">
        
            {/* محل قرارگیری تصویر بنر */}
            <div className="w-[320px] h-[180px] sm:w-[380px] sm:h-[210px] md:w-[420px] md:h-[230px]  flex items-center justify-center">
            
              <img src="/img/banner.png" alt="banner" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
}
