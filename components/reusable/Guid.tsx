"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "انتخاب سکه", desc: "وارد سایت شوید و سکه موردنظر خود را انتخاب کنید." },
  { id: 2, title: "ثبت سفارش", desc: "قیمت لحظه‌ای را بررسی کرده و سفارش خود را ثبت کنید." },
  { id: 3, title: "پرداخت و دریافت", desc: "پس از پرداخت، سکه شما به صورت ایمن ارسال می‌شود." },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(2);
    const duration = 2500; 
    const step = 50;
    const increment = (step / duration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setActiveIndex((prevIndex) => (prevIndex - 1 + steps.length) % steps.length);
        }, 100); 
          return 100;
        }
        return prev + increment;
      });
    }, step);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-16">
           <p className="text-gray-600  mx-20 text-center mb-20">
           در دنیای امروز، خرید و فروش طلا و سکه دیگر محدود به روش‌های سنتی نیست. با پیشرفت تکنولوژی، امکان خرید سکه طلا آنلاین به ساده‌ترین شکل ممکن فراهم شده است. در سکه محمد، شما می‌توانید با اطمینان کامل اقدام به خرید اینترنتی سکه طلا و سایر انواع سکه‌های بهار آزادی، نیم سکه و ربع سکه کنید.
        </p>
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          راهنمای خرید و فروش در سه مرحله
        </h2>
     

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={step.id}
                className="relative bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
                style={{
                  border: "3px solid",
                  borderColor: isActive
                    ? `hsl(48, 100%, ${100 - progress / 2}%)`
                    : "#e5e7eb",
                }}
                animate={{ scale: isActive ? 1.05 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 mb-4 text-xl font-bold">
                  {step.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
