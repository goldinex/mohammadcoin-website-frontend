import Head from 'next/head';
import Navbar from '@/components/reusable/Navbar';
import LandingPage from '@/components/reusable/landingPage';
import BuySell from '@/components/reusable/BuySell';
import Table from '@/components/reusable/Table';
import Card from '@/components/reusable/Card';
import Banner from '@/components/reusable/Banner';
import Faq from '@/components/reusable/Faq';
import Guid from '@/components/reusable/Guid';
import WhyUs from '@/components/reusable/WhyUs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>سکه محمد| خرید و فروش سکه و شمش در تهران</title>

        <meta
          name='description'
          content='خرید و فروش سکه و شمش طلا با بهترین قیمت روز. مشاهده قیمت لحظه‌ای طلا و انجام معاملات آسان در سکه محمد همین حالا قیمت را بررسی کنید.'
        />

        <link rel='canonical' href='https://www.sekemohammad.com/' />
        <meta name='robots' content='index, follow' />
      </Head>

      <div className='p-0 bg-[linear-gradient(to_bottom,rgba(245,202,44,0.29)_0%,rgba(255,210,0,0)_100%)]'>
        <Navbar />
        <main>
          <h1 className='sr-only'>بازار طلا و سکه در جیب شما </h1>
          <LandingPage />
        </main>
      </div>

      <BuySell />

      <div id='pricesTable'>
        <Table />
      </div>

      <Card />
      <Banner />

      <div id='guid'>
        <Guid />
      </div>

      <WhyUs />

      <div id='faq'>
        <Faq />
      </div>
    </div>
  );
}
