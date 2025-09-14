'use client';

import { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type CoinType = 'tamamEmami' | 'tamamAzadi' | 'nimAzadi' | 'robAzadi' | 'grami';

export default function CoinExchange() {
  const router = useRouter();
  const [coinType, setCoinType] = useState<CoinType>('tamamEmami');
  const [amount, setAmount] = useState<number>(1);
  const [multiplier, setMultiplier] = useState<number>(1);
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');
  const [quantity, setQuantity] = useState<number>(1);

  const coinTypes: Record<CoinType, string> = {
    tamamAzadi: 'تمام بهار آزادی',
    nimAzadi: 'نیم بهار آزادی',
    robAzadi: 'ربع بهار آزادی',
    grami: 'سکه یک گرمی',
    tamamEmami: 'سکه تمام امامی'
  };

  const prices: Record<CoinType, number> = {
    tamamAzadi: 35000000,
    nimAzadi: 18000000,
    robAzadi: 9000000,
    grami: 2500000,
    tamamEmami: 32000000
  };

  const calculateRandomResult = (): void => {
    const baseAmount = quantity * prices[coinType];
    const randomMultiplier = parseFloat((Math.random() * 0.6 + 0.7).toFixed(2));
    setMultiplier(randomMultiplier);
    const finalAmount = Math.floor(baseAmount * randomMultiplier);
    setAmount(finalAmount);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    calculateRandomResult();
  };

  const handleCoinTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCoinType(e.target.value as CoinType);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value);
    setAmount(isNaN(value) ? 1 : value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value);
    setQuantity(isNaN(value) ? 1 : Math.max(1, value));
  };

  const formattedBasePrice = (): string => {
    const value = Math.floor(quantity * prices[coinType] * multiplier);
    return `${value.toLocaleString('fa-IR')} ریال`;
  };

  // Live update payment amount when quantity/type changes
  useEffect(() => {
    const value = Math.floor(quantity * prices[coinType] * multiplier);
    setAmount(value);
  }, [quantity, coinType, multiplier]);

  return (
    <div className=" bg-white flex items-center justify-center p-4" dir="rtl">
      <div className="w-full max-w-4xl">
        <div className="flex justify-center">
          <div className="relative ">
            <div className="flex bg-secondary-300 border border-secondary-300 rounded-t-[10px] px-12 py-2 shadow-sm">
              <div className='bg-white rounded-[8px] px-10 py-1'>
              <button
                type="button"
                onClick={() => setMode('buy')}
                className={`${mode === 'buy' ? 'bg-white shadow' : ''} px-8 py-2 rounded-xl text-sm text-gray-700 transition`}
              >
                خرید
              </button>
              <button
                type="button"
                onClick={() => setMode('sell')}
                className={`${mode === 'sell' ? 'bg-white shadow' : ''} px-8 py-2 rounded-xl text-sm text-gray-700 transition`}
              >
                فروش
              </button>
              </div>
             
            </div>
          </div>
        </div>

        <div className="bg-secondary-300 rounded-2xl shadow-md p-5 md:p-6">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
            <div className="flex-1 min-w-[260px]">
              <div className="text-xs text-gray-700 mb-2">دریافت می‌کنم</div>
              <div className="flex items-stretch gap-0 overflow-hidden rounded-[16px] bg-white border border-secondary-500">
                <div className="relative flex-1">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <select 
                    value={coinType}
                    onChange={handleCoinTypeChange}
                    className="w-full appearance-none p-3 pr-3 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  >
                    <option value="tamamEmami">سکه تمام امامی</option>
                    <option value="tamamAzadi">تمام بهار آزادی</option>
                    <option value="nimAzadi">نیم بهار آزادی</option>
                    <option value="robAzadi">ربع بهار آزادی</option>
                    <option value="grami">سکه یک گرمی</option>
                  </select>
                </div>
                <div className="flex items-center px-3 text-gray-300">|</div>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  placeholder="حداقل ۱ می باشد"
                  className="w-28 p-3 bg-transparent focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-center"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[220px]">
              <div className="text-xs text-gray-700 mb-2">پرداخت می‌کنم</div>
              <div className="relative">
                <input
                  type="text"
                  readOnly
                  value={amount.toLocaleString('fa-IR')}
                  placeholder={formattedBasePrice()}
                  className="w-full p-3 pr-3 pl-16 bg-white border border-secondary-500 rounded-[16px] focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 bg-white px-2 rounded">
                  ریال
                </span>
              </div>
            </div>

            <div className="md:w-auto w-full flex items-end">
              <button
                type="submit"
                onClick={() => router.push(`/order?mode=${mode}&coin=${coinType}&qty=${quantity}&amount=${amount}`)}
                className="w-full md:w-auto whitespace-nowrap bg-success-500 hover:bg-[#118554] text-white px-12 py-3 text-sm font-medium shadow-sm transition rounded-[16px]"
              >
                {mode === 'buy' ? 'خرید' : 'فروش'}
              </button>
            </div>
          </form>
        </div>
        
      
      </div>
    </div>
  );
}