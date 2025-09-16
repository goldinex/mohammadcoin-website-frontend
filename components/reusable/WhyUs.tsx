"use client";
import Image from "next/image";

type FeatureItem = {
  icon?: string;
  image?: string;
  title: string;
  desc: string;
};


export default function WhyUs() {
  const features: FeatureItem[] = [
    {
        image: "/img/coin.svg",
      title: "",
      desc:
        "ضمانت اصالت سکه‌ها/شمش ها و پارسیان ها: تمامی اجناس دارای اصالت تضمین‌شده هستند.",
    },
    {
        image: "/img/courier.svg",
      title: "",
      desc:
        "تحویل فیزیکی: تحویل سکه‌, شمش و پارسیان در شعب معتبر سکه محمد.",
    },
    {
        image: "/img/best-price.svg",
      title: "",
      desc:
        "قیمت‌های به‌روز:امکان بررسی لحظه‌ای قیمت‌ها برای بهترین تصمیم‌گیری.",
    },
    {
        image: "/img/gold.svg",
      title: "",
      desc:
        "تنوع در محصولات: امکان خرید اینترنتی سکه بهار آزادی، نیم‌سکه، ربع‌سکه و سکه گرمی و... شمش طلا و انواع پارسیان.",
    },
    {
        image: "/img/support.svg",
      title: "",
      desc:
        "پشتیبانی حرفه‌ای: تیم پشتیبانی محمد گلد آماده پاسخگویی به تمامی سوالات شما است.",
    },
  ];

  return (
    <section className="py-16 px-2 lg:px-20 bg-white" dir="rtl">
      <div className=" mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          چرا سکه محمد؟
        </h2>

        <div className="w-[100%]  lg:grid gap-0 lg:gap-10 lg:grid-cols-5">
          {features.map((item) => (
            <div key={item.title} className="text-center lg:border-none border border-secondary-300 px-3 lg:px-0 rounded-[10px] flex lg:flex-col flex-row-reverse pt-3 lg:bg-transparent bg-[#fdfdfd] mb-3 w-full lg:w-60">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title || "feature"}
                  width={64}
                  height={64}
                  className="mx-auto mb-0 lg:mb-4 h-16 w-16 object-contain"
                  priority={false}
                />
              ) : (
                <div className="text-5xl mb-4">{item.icon}</div>
              )}
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-7">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700 text-[8px] lg:text-sm md:text-base leading-8 mt-4 lg:mt-14 text-center">
        علاوه بر خرید، محمد گلد امکان فروش اینترنتی سکه طلا/شمش/پارسیان را نیز برای کاربران فراهم کرده است. اگر قصد فروش سکه‌های خود را دارید، می‌توانید با قیمت مناسب و بدون واسطه در کمترین زمان معامله خود را انجام دهید. این ویژگی باعث می‌شود که بازار سکه همیشه در دسترس و شفاف باشد.
        </p>
      </div>
    </section>
  );
}


