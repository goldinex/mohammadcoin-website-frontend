
"use client";

import { useMemo, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Bullion = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  price: number;
};

function BullionCard({ item }: { item: Bullion }) {
  return (
    <div  className="bg-primary-210 rounded-[10px] p-4">
      <div className="flex items-start gap-4">
    
        <div className="flex-1 justify-start">
          <div className="text-[18px] font-medium text-gray-800 mb-2">{item.title}</div>
          <div className="text-[14px] text-gray-600 leading-5">
            {item.subtitle}
            <br />
            عیار 995
          </div>
        </div>
        <div className="w-32 h-32 bg-white rounded-[10px] flex items-center justify-center">
          <img src={item.image} alt={item.title} className="max-h-24 object-contain" />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
      <div className="text-[18px] text-gray-800">
          قیمت روز: {item.price.toLocaleString("fa-IR")}
        </div>
        <button className=" text-center px-12 py-2 text-[16px] rounded-[20px] bg-[#96A375] text-white">خرید</button>
       
      </div>
    </div>
  );
}

export default function CardSection() {
  const allItems: Bullion[] = useMemo(
    () => [
      { id: "b1", image: "/img/seke.png", title: "شمش طلا 0.5 گرمی", subtitle: "عیار 995", price: 160000000 },
      { id: "b2", image: "/img/seke.png", title: "شمش طلا 1 گرمی", subtitle: "عیار 995", price: 160000000 },
      { id: "b3", image: "/img/seke.png", title: "شمش طلا 2 گرمی", subtitle: "عیار 995", price: 160000000 },
      { id: "b4", image: "/img/seke.png", title: "شمش طلا 0.5 گرمی", subtitle: "عیار 995", price: 160000000 },
      { id: "b5", image: "/img/seke.png", title: "شمش طلا 1 گرمی", subtitle: "عیار 995", price: 160000000 },
      { id: "b6", image: "/img/seke.png", title: "شمش طلا 2 گرمی", subtitle: "عیار 995", price: 160000000 },
      { id: "b7", image: "/img/seke.png", title: "شمش طلا 5 گرمی", subtitle: "عیار 995", price: 160000000 },
    ],
    []
  );

  const [visibleCount, setVisibleCount] = useState<number>(6);

  const visibleItems = allItems.slice(0, visibleCount);
  const hasMore = visibleCount < allItems.length;

  return (
    <section dir="rtl" className="w-full mt-40 py-10">
      <h3 className="text-center text-xl font-semibold text-gray-800 mb-6">شمش ها</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item) => (
          <BullionCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        {hasMore && (
          <button
            onClick={() => setVisibleCount((c) => Math.min(c + 3, allItems.length))}
            className="flex  items-center gap-2 text-[14px] px-4 py-2 border border-secondary-400 rounded-[16px] text-secondary-400"
          >
            <p>            نمایش بیشتر
            </p>
            <IoIosArrowDown />

          </button>
        )}
      </div>
    </section>
  );
}
  