import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa';

export default function Index() {
  return (
    <div className='bg-[#fffffb]'>
      <div className='relative flex mt-10 justify-center mx-auto w-full'>
        <img src='/img/border.svg' alt='' />
        <p className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13px] lg:text-[26px] text-black font-bold'>
          درباره ما
        </p>
      </div>

     <div className='hidden lg:flex justify-center mt-10'>
      <img src="/img/about.svg" alt="" />
     </div>
     <div className='flex lg:hidden justify-center mt-10'>
      <img src="/img/aboutmob.svg" alt="" />
     </div>
    </div>
  );
}
