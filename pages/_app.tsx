import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '@/src/redux/store';
import { Provider } from 'react-redux';
import { AuthProvider } from '@/src/contexts/AuthContext';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/reusable/Navbar';
import Footer from '@/components/reusable/Footer';
export default function App({ Component, pageProps }: AppProps) {
  const withLayout = (
    <div className='w-full h-[100dvh] flex bg-white'>
      <div className='flex-1 h-[100dvh] overflow-y-auto'>
        <Navbar/>
        <main className='p-4 md:px-8 '>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </div>
    </div>
  );

  return (
    <Provider store={store}>
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
