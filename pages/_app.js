import { set } from 'mongoose';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import '../styles/globals.css'
import ads from '../components/ads';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  function Loading() {
    const [load, setload] = useState(false);
    useEffect(() => {
      const handleStart = (url) => (url != router.asPath) && setload(true)
      const handleStop = (url) => (url === router.asPath) && setload(false)
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleStop);
      router.events.on('routeChangeError', handleStop);

      return () => {
        router.events.off('routeChangeStart', handleStart),
        router.events.off('routeChangeComplete', handleStop),
        router.events.off('routeChangeError', handleStop)
      }
    })

    return (
       load && <div className='fixed z-[2000] h-screen w-screen top-0 inset-0 bg-opacity-70 bg-gray-800 flex items-center justify-center'>
        <span class="loader"></span>
      </div>
    )


  }
  return <>
  <Loading/><Component {...pageProps} /></>
}
