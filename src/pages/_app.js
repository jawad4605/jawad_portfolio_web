import WhatsAppButton from '../components/WhatsAppButton';
   import '../styles/globals.css'; // Import global styles if needed

   function MyApp({ Component, pageProps }) {
     return (
       <>
         <Component {...pageProps} />
         <WhatsAppButton />
       </>
     );
   }

   export default MyApp;