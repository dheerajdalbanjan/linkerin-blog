import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import mongoose from 'mongoose'
import blog from '../models/blog'


export default function Home({data}) {
  return (
    <>
      <Head>
        <title>LinkerIn</title>
        <meta name="description" content="Blog like anything" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5640420271018797"
     crossorigin="anonymous"></script> */}
      </Head>
      <main style={{fontFamily:'Roboto, sans-serif'}}>
      {/* <motion.div
          className='-z-50'
          initial={{translateY:-80,zIndex:-50}}
          animate={{translateY:0}}
          transition={{duration:1}}
        > */}
          <Navbar/>
        {/* </motion.div> */}
        {/* <motion.div
          className='-z-50'
          initial={{translateY:80,zIndex:-50}}
          animate={{translateY:0}}
          transition={{duration:1}}
        > */}
          <Hero />
        {/* </motion.div> */}
        <Features data={data}/>
        <Footer />
      </main>
    </>
  )
}


export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
      mongoose.connect(process.env.MONGO_URI);
  }
  let data;
  try {
      data = await blog.find({category:'Technology'});
  } catch (err) {
      console.log(err)
  }

  return {
      props: {
          data: JSON.parse(JSON.stringify(data))
      }
  }
}