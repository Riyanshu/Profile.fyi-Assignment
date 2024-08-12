import { CartProvider } from '@/context/CartContext';
import '../app/globals.css';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <CartProvider>
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    );
  }
  
  export default MyApp;