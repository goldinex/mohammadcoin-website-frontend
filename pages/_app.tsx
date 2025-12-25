import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@/src/redux/store';
import { Provider } from 'react-redux';
import { AuthProvider } from '@/src/contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/reusable/Navbar';
import Footer from '@/components/reusable/Footer';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  const withLayout = (
    <div className='w-full min-h-[100dvh] flex bg-white'>
      <div className='flex-1 min-h-[100dvh] overflow-y-auto'>
        {!isHome && <Navbar />}
        <main className={isHome ? '' : 'p-4 md:px-8'}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );

  return (
    <Provider store={store}>
      <Head>
        <title>سکه محمد | خرید و فروش سکه و طلا</title>
        <meta
          name='description'
          content='خرید و فروش امن طلا و سکه با قیمت لحظه‌ای. معامله سکه پارسیان و شمش با بهترین نرخ، سریع و مطمئن.'
        />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' type='image/png' sizes='48x48' href='/favicon.svg' />

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-Q2TGZLNZQG'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q2TGZLNZQG');
          `,
          }}
        />

        {/* Schema WebSite */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: 'https://sekemohammad.com',
              name: 'سکه محمد',
            }),
          }}
        />

        {/* Schema Organization */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'سکه محمد',
              url: 'https://sekemohammad.com',
              logo: 'https://sekemohammad.com/logo.png',
              image: 'https://sekemohammad.com/img/shopdata.png',
            }),
          }}
        />

        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='خرید و فروش امن طلا و سکه با قیمت لحظه‌ای'
        />
        <meta
          property='og:description'
          content='معامله سکه پارسیان و شمش با نرخ لحظه‌ای. همین حالا شروع کن.'
        />
        <meta property='og:url' content='https://sekemohammad.com/' />
        <meta property='og:site_name' content='سکه محمد' />

        <meta
          property='og:image'
          content='https://sekemohammad.com/img/logoImg/logo-right.png'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          property='og:image:alt'
          content='پلتفرم خرید و فروش آنلاین طلا و سکه سکه محمد'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='خرید و فروش امن طلا و سکه با قیمت لحظه‌ای'
        />
        <meta
          name='twitter:description'
          content='معامله سکه پارسیان و شمش با نرخ لحظه‌ای. همین حالا شروع کن.'
        />
        <meta
          name='twitter:image'
          content='https://sekemohammad.com/img/og-image.jpg'
        />
      </Head>
      <Toaster
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: '15px',
            background: '#fff',
            color: '#333',
            border: '1px solid #ddd',
            padding: '12px',
          },
          success: {
            style: {
              background: '#dcfce7',
              color: '#166534',
            },
          },
          error: {
            style: {
              background: '#fee2e2',
              color: '#991b1b',
            },
          },
        }}
      />

      <AuthProvider>{withLayout}</AuthProvider>
    </Provider>
  );
}
