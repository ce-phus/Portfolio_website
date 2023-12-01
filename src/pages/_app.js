import NavBar from '../components/NavBar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
// To use Montserrat font we need to initialize it, declaring a variable called montserrat by using the font montserrat
import { Montserrat } from 'next/font/google' 
import Head from 'next/head'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets:['latin'],
  // We want this font to be used by the varibale name, so we will define one variable
  variable :"--font-mont"
  // you can read more about this in the index font doc
})
export default function MyApp({ Component, pageProps }) {
  const router =useRouter();
  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <NavBar/>
      <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer/>
    </main>
    </>
  )
}
// let's use the montserrat variable in the tailwind.config.js
