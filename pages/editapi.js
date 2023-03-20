
import MDXRemote from 'next-mdx-remote';
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import serialize from 'next-mdx-remote/serialize';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import Footer from '../components/Footer';
import Head from 'next/head';
import mongoose from 'mongoose';
import blog from '../models/blog';
import { useRouter } from 'next/router';


const Editapi = ({data}) => {
    const router = useRouter() ; 
    const {id} = router.query ; 
    const [blog, setBlog] = useState({
        title: data.title,
        description: data.description,
        image: data.image,
        content: data.content,
        category:data.category,
        tags: data.tags, 
        author: data.author,
        id: id
    });
    const [submit, setSubmit] = useState(null);
    const [sucess, setSucess] = useState(null);
    const [fail, setFail] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        sendrequest().then(data => { setSucess(data.status); setFail(!data.status); setSubmit(null) }).catch(err => {setSucess(null); setFail(1) ; setSubmit(null) ;console.log(err)})
    }

    const sendrequest = async () => {
        const res = await axios.post('/api/editblogapi', blog, { headers: { "Content-Type": "application/json" } });
        const data = await res.data;
        return data;
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setBlog(prev => ({
            ...prev, [name]: value
        }))
    }

    return (
        <div style={{fontFamily:'Roboto, sans-serif'}}>
            <Head>
                <title>Edit blog</title>
            </Head>
            <Navbar />
            {
                sucess && <div className='bg-green-200 h-60 max-w-6xl mx-4 md:mx-auto my-6 rounded-xl text-center flex items-center justify-center text-4xl text-green-700 font-extrabold'>Successfully updated the Blog</div>
            }
            {
                fail && <div className='bg-red-200 h-60 max-w-6xl mx-4 md:mx-auto my-6 rounded-xl text-center flex items-center justify-center text-4xl text-red-700 font-extrabold'>Couldn&lsquo;t update the blog, try again</div>
            }
            {submit ?
                < div className='h-screen cursor-progress w-screen fixed inset-0 top-0 flex items-center justify-center bg-gray-600 bg-opacity-70 '>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-24 h-24 duration-1000 animate-spin text-gray-200'>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}<span class="loader"></span>
                </div> : null
            }
            {
                !sucess && !fail && <form className='max-w-7xl  mx-auto px-6 md:px-4 mb6' onSubmit={handleSubmit}>
                    <h1 className='text-3xl font-extrabold text-gray-700 my-6'>Edit Blog</h1>
                    <div className='flex flex-col space-y-2 my-4'>
                        <label for='title' className='text-lg font-medium text-gray-600 '>Enter the title</label>
                        <input onChange={handleChange} value={blog.title} type={'text'} name='title' id='title' className='max-w-7xl outline-none px-2 py-1 border-2 border-gray-400 focus:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 ' />
                    </div>
                    <div className='flex flex-col space-y-2 my-4'>
                        <label for='description' className='text-lg font-medium text-gray-600 '>Enter the description</label>
                        <input onChange={handleChange} value={blog.description} type={'text'} name='description' id='description' className='max-w-7xl outline-none px-2 py-1 border-2 border-gray-400 focus:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 ' />
                    </div>
                    <div className='flex flex-col space-y-2 my-4'>
                        <label for='image' className='text-lg font-medium text-gray-600 '>Enter the image url</label>
                        <input onChange={handleChange} value={blog.image} type={'text'} name='image' id='image' className='max-w-7xl outline-none px-2 py-1 border-2 border-gray-400 focus:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 ' />
                    </div>
                    <div className='flex flex-col space-y-2 my-4'>
                        <label for='category' className='text-lg font-medium text-gray-600 '>Enter the Category</label>
                        <input onChange={handleChange} value={blog.category} type={'text'} name='category' id='category' className='max-w-7xl outline-none px-2 py-1 border-2 border-gray-400 focus:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 ' />
                    </div>
                    <div className='flex flex-col space-y-2 my-4'>
                        <label for='author' className='text-lg font-medium text-gray-600 '>Enter your name</label>
                        <input onChange={handleChange} value={blog.author} type={'text'} name='author' id='author' className='max-w-7xl outline-none px-2 py-1 border-2 border-gray-400 focus:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 ' />
                    </div>
                    <div className='flex flex-col space-y-2 my-4'>
                        <label for='tags' className='text-lg font-medium text-gray-600 '>Enter the tags for your blog(, )</label>
                        <input onChange={handleChange} value={blog.tags} type={'text'} name='tags' id='tags' className='max-w-7xl outline-none px-2 py-1 border-2 border-gray-400 focus:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 ' />
                    </div>
                    <div className='flex flex-col space-y-2 my-4 '>
                        <label for='content' className='text-lg font-medium text-gray-600 '>Enter the content</label>
                        <div className=' flex flex-col md:flex-row p-1 overflow-hidden md:h-52 outline-none peer-focus:bg-red-800 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-300 divide-double border-2 border-gray-400 focus:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 '>
                            <textarea placeholder='Start writing...' name='content' id='content' onChange={handleChange} value={blog.content} className='md:h-full md:mr-1 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-white h-52 md:w-1/2  outline-none p-3  md:p-5' />
                            <ReactMarkdown className='prose hover:prose-headings:underline overflow-auto md:w-1/2 h-52 md:h-full p-3  md:p-5 max-w-none scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-white'>{blog.content}</ReactMarkdown>
                        </div>
                    </div>
                    <button onClick={() => setSubmit(!submit)} className='px-4 py-1 border-gray-600 border-2 text-lg text-gray-700 font-medium hover:bg-gray-700 hover:text-gray-100 hover:shadow-xl transition-all duration-500 focus:ring-4 ring-gray-200 active:ring-4'> Submit the blog</button>
                </form>
            }
            <Footer />
        </div >
    )
}

export default Editapi


export async function getServerSideProps(context) {
    const {id} = context.query; 
    if(!mongoose.connections[0].readyState){
        mongoose.connect(process.env.MONGOURI);
    }
    let data ;
    try {
        data = await blog.findById(id); 
    } catch (err) {
        console.log(err)
    }

    return {
        props:{
            data: JSON.parse(JSON.stringify(data))
        }
    }
}