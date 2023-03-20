import axios from 'axios';
import mongoose from 'mongoose';
import Head from 'next/head';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Blogcard from '../components/Blogcard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import blog from '../models/blog';

const Blog = ({ data }) => {
    const router = useRouter();
    const { category } = router.query;
    const [query, setquery] = useState(category || 0);
    return (
        <div>
            <Navbar />
            <Head>
                <title>{category && `LinkerIn: ${category}`}</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5640420271018797"
     crossorigin="anonymous"></script>
            </Head>
            <main className='min-h-screen py-8 max-w-7xl mx-auto px-6 md:px-4'  style={{fontFamily:'Roboto, sans-serif'}}>
                <h1 className='text-3xl md:text-4xl my-5  font-bold text-gray-800 tracking-tight'>{data.length} results for “{category || "New Blogs"}”</h1>
                <h2 className='text-2xl my-3 font-bold text-gray-700 tracking-tighter'>Explore <span className='text-blue-800'>{category} blogs</span></h2>
                <div className='flex flex-row divide-x '>
                    <div className='flex flex-col md:w-3/4 space-y-8 divide-y-2 md:pr-4'>
                        {data.length ? data.map((e, i) => <Blogcard key={i} data={e} />) : <h2 className='text-3xl font-bold text-gray-600 my-4'>No results found!</h2>}
                    </div>
                    <div className='px-5 hidden md:block w-1/4 py-6'>
                        <h2 className='text-2xl font-bold text-gray-800 group mb-5'>About <span className='text-blue-800 group-hover:underline'>{category}</span></h2>
                        <p className='text-lg text-gray-500'>No information as of now</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Blog

export async function getServerSideProps(context) {
    const { category } = context.query;
    if (!mongoose.connections[0].readyState) {
        mongoose.connect(process.env.MONGO_URI);
    }
    let data, res;
    if (!category) {
        try {
            data = await blog.find();
        } catch (err) {
            console.log(err)
        }
    }
    else {
        try {
            data = await blog.find({ category });
        } catch (err) {
            console.log(err)
        }
    }
    return {
        props: {
            data: JSON.parse(JSON.stringify(data)).reverse()
        }, // will be passed to the page component as props
    }
}