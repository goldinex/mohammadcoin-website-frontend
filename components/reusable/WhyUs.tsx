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
        image: "/img/coin.png",
      title: "",
      desc:
        "ضمانت اصالت سکه‌ها/شمش ها و پارسیان ها: تمامی اجناس دارای اصالت تضمین‌شده هستند.",
    },
    {
        image: "/img/courier.png",
      title: "",
      desc:
        "تحویل فیزیکی: تحویل سکه‌, شمش و پارسیان در شعب معتبر سکه محمد.",
    },
    {
        image: "/img/best-price.png",
      title: "",
      desc:
        "قیمت‌های به‌روز:امکان بررسی لحظه‌ای قیمت‌ها برای بهترین تصمیم‌گیری.",
    },
    {
        image: "/img/gold.png",
      title: "",
      desc:
        "تنوع در محصولات: امکان خرید اینترنتی سکه بهار آزادی، نیم‌سکه، ربع‌سکه و سکه گرمی و... شمش طلا و انواع پارسیان.",
    },
    {
        image: "/img/support.png",
      title: "",
      desc:
        "پشتیبانی حرفه‌ای: تیم پشتیبانی محمد گلد آماده پاسخگویی به تمامی سوالات شما است.",
    },
  ];

  return (
    <section className="py-16 px-20 bg-white" dir="rtl">
      <div className=" mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
          چرا سکه محمد؟
        </h2>

        <div className="grid gap-10 md:grid-cols-5">
          {features.map((item) => (
            <div key={item.title} className="text-center w-60">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title || "feature"}
                  width={64}
                  height={64}
                  className="mx-auto mb-4 h-16 w-16 object-contain"
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

        <p className="text-gray-700 text-sm md:text-base leading-8 mt-14 text-center">
          علاوه بر خرید، محمد خالد امکان فروش اینترنتی سکه طلا/شمش/پارسیان را نیز برای
          کاربران فراهم کرده است. اگر قصد فروش سکه‌های خود را دارید، می‌توانید با
          قیمت مناسب و بدون واسطه در کمترین زمان معامله خود را انجام دهید. این ویژگی
          باعث می‌شود که بازار سکه همیشه در دسترس و شفاف باشد.
        </p>
      </div>
    </section>
  );
}


