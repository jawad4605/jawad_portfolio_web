import { useEffect } from 'react';
import { useRouter } from 'next/router';
import WhatsAppButton from '../components/WhatsAppButton';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const resetScroll = () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };

    router.events.on('routeChangeStart', resetScroll);
    router.events.on('routeChangeComplete', resetScroll);
    router.events.on('routeChangeError', resetScroll);

    return () => {
      router.events.off('routeChangeStart', resetScroll);
      router.events.off('routeChangeComplete', resetScroll);
      router.events.off('routeChangeError', resetScroll);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  );
}

export default MyApp;
