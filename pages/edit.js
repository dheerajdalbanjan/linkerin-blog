import mongoose from 'mongoose'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import blog from '../models/blog'

const edit = ({ data }) => {
    return (
        <div>
            <Head>
                <title>Edit</title>
            </Head>
            <Navbar />
            <main className='mx-auto max-w-7xl py-16 px-4' style={{fontFamily:'Roboto, sans-serif'}}>
                <h1 className='text-3xl font-extrabold text-gray-700 mb-6'>Edit</h1>
                <div className='flex flex-col space-y-5 divide-y'>
                    {
                        data && data.map((e, i) =>
                            <Link href={`/editapi?id=${e._id}`} key={i} className='group max-w-3xl flex py-5 px-1 h-44 space-x-5 items-center  cursor-pointer overflow-hidden'>
                                <div className=' shadow-lg h-full w-1/3 overflow-hidden'><img src={e.image} alt={e.title} className='object-cover h-full w-full transition-all duration-500 group-hover:opacity-80 group-hover:scale-105' /></div>
                                <div className='flex flex-col space-y-1 w-2/3'>
                                    <h2 className='text-lg text-gray-800 font-bold tracking-tighter group-hover:underline'>{e.title}</h2>
                                    <p className='text-sm text-gray-500'>{e.author}</p>
                                </div>
                            </Link>
                    )
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default edit

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
        mongoose.connect(process.env.MONGO_URI);
    }
    let data;
    try {
        data = await blog.find();
    } catch (err) {
        console.log(err)
    }

    return {
        props: {
            data: JSON.parse(JSON.stringify(data))
        }
    }
}