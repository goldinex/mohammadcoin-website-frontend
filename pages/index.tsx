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
      <LandingPage />
      <BuySell />
      <Table />
      <Card />
      <Banner />
      <Guid />
      <WhyUs />
      <Faq />
    </div>
  );
}
