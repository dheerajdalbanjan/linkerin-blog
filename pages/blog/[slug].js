import { Joan, Josefin_Sans } from '@next/font/google'
import { data } from 'autoprefixer'
import mongoose from 'mongoose'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import blog from '../../models/blog'
import movie from '../../models/movie'

const B = ({ data ,sdata, moviee}) => {
    const [time, setTime] = useState(15)
    const router = useRouter()
    const {q} = router.query
    console.log(q)
    useEffect(() => {
      const timer = setTimeout(() => {
        setTime(time - 1)
      }, 1000);
      if(time === 0){
        clearTimeout(timer)
      }
      return () => {
        clearTimeout(timer);
      };
  
    })
    
    return (
        <div>
            <Head>
                <title>{data.title}</title>
            </Head>
            <Navbar />
            <main className='min-h-screen max-w-7xl flex flex-col space-y-5 md:flex-row md:divide-x-2 mx-auto px-4 py-6 md:px-4 ]'  style={{fontFamily:'Roboto, sans-serif'}}>
                <div className='max-w-4xl md:pr-6'>
                    {(moviee || q)  && <h1 className='text-2xl tracking-tight   mb-5  w-fit  text-red-500'>{time?`Thank you for visiting, Wait for ${time} seconds`:`Scroll down to get link`}</h1>}
                    <h1 className='md:text-4xl text-3xl  tracking-tight font-extrabold text-gray-800 my-5 '>{data.title}</h1>
                    <h2 className='text-xl my-3 max-w-3xl  font-semibold text-gray-600 '>{data.description}</h2>
                    <div className='flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-5 my-4'>
                        <p className='text-sm  bg-gray-200 rounded-full w-fit  flex-row-reverse items-center text-gray-600 px-[9px]  py-[1px] inline-flex'>{data.date.split('T')[0]}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 mr-2  h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        </p>
                        <div className='flex flex-row space-x-1'>
                            {data && data.tags.split(", ").slice(0, 4).map((e, i) => <div key={i} className='text-xs py-1 px-2  text-gray-700 rounded-full bg-yellow-200 text-center group-hover:bg-yellow-100 group-hover:text-gray-800'># {e}</div>)}
                        </div>
                    </div>
                    <div className='max-w-3xl overflow-hidden max-h-[30rem] my-5'><img src={data.image} alt={data.title} className='  shadow-lg  object-cover w-full h-full' /></div>
                    <article className='prose max-w-3xl md:text-justify ' style={{fontFamily:'Droid serif'}}><ReactMarkdown>{data.content}</ReactMarkdown></article>
                    {(moviee || q) && !time && <a href={moviee?moviee.link:q} className='justify-self-center w-fit md:hidden px-7 focus:ring-4 active:ring-4 focus:ring-yellow-100 active:ring-red-100 py-1 text-lg rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-gray-50 my-5'>Get link</a>}
                </div>
                <div className='md:pl-3  max-w-sm'>
                    <h2 className='text-2xl font-bold text-gray-700 tracking-tight mb-3'>Suggested Posts</h2>
                    {sdata.length == 0 && <h3 className='text-xl text-gray-500 font-bold'>No results</h3>}
                    <div className='flex flex-col  divide-y'>{sdata && sdata.map((e , i)=><Link href={`/blog/${e._id}`} key={i} className='group flex py-5 px-1 h-32 space-x-3 items-start justify-between cursor-pointer overflow-hidden'>
                        <div className=' shadow-lg h-20 w-2/5 overflow-hidden'><img src={e.image} alt={e.title} className='object-cover h-full w-full transition-all duration-500 group-hover:opacity-80 group-hover:scale-105'/></div>
                        <div className='flex flex-col space-y-1'>
                            <h2 className='text-lg text-gray-800 font-bold tracking-tight group-hover:underline'>{e.title.slice(0,40)}...</h2>
                            <p className='text-sm text-gray-500'>{e.author}</p>
                        </div>
                    </Link>)}</div>
                    {(moviee || q) && !time && <a href={moviee?moviee.link:q} className='justify-self-center w-fit md:hidden px-7 focus:ring-4 active:ring-4 focus:ring-yellow-100 active:ring-red-100 py-1 text-lg rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-gray-50 my-5'>Get link</a>}
                    
                </div>
                
            </main>
            <Footer />
        </div>
    )
}

export default B

export async function getServerSideProps(context) {
    const { slug , movie_id} = context.query;
    let data, sdata, moviee;
    if (!mongoose.connections[0].readyState) {
        mongoose.connect(process.env.MONGO_URI);
    }
    try {
        data = await blog.findById(slug);
    } catch (error) {
        console.log(error)
    }
    const t = data.tags.split(' '); 
    try {
        sdata =  await blog.find()
        sdata = sdata.filter(e=>{
            if(t.some(v=>e.tags.includes(v)) && e._id.toString().localeCompare(data._id.toString()) != 0){
                return e; 
            }
        })
    } catch (err) {
        console.log(err)
    }
    try {
        moviee = await movie.findById(movie_id); 
    } catch (err) {
        console.log(err)
    }
    return {
        props: {
            data: JSON.parse(JSON.stringify(data)),
            sdata: JSON.parse(JSON.stringify(sdata)), 
            moviee: JSON.parse(JSON.stringify(moviee)),
        }
    }
}