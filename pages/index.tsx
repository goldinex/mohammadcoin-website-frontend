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
      <div className='p-0 bg-[linear-gradient(to_bottom,rgba(245,202,44,0.29)_0%,rgba(255,210,0,0)_100%)]'>
        <Navbar />
        <LandingPage />
      </div>{' '}
      <BuySell />
      <div id='pricesTable'>
        <Table />
      </div>
      <Card />
      <Banner />
      <Guid />
      <WhyUs />
      <div id='faq'>
        <Faq />
      </div>
    </div>
  );
}
