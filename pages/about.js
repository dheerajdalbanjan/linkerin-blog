import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const about = () => {
    return (
        <div style={{fontFamily:'Roboto, sans-serif'}}>
            <Head>
                <title>About Us</title>
            </Head>
            <Navbar />
            <div className='text-lg leading-8 max-w-7xl px-6 md:px-4 my-5 text-gray-600 font-normal mx-auto'>
                <h1 className='text-3xl font-extrabold my-5 text-gray-700'>About Us</h1>
                <p>Hello Friends</p><p>Welcome to Our website is a blog website and also movie link website ! My name is Dheeraj ! I m a I m a web developer who has worked on many projects. The idea for creating this website was to share the knowledge in categories around the whole world. with a passion for Web development.</p><p>When I came up with the idea for Our website is a blog website and also movie link website , it was with the goal to able to offer the very best Blogs and movies to Blog readers and movie lovers like yourself.</p><p>If you are like me then you Have trouble finding the best place to enhance your knowledge, then you are in the right place</p><p>If so, you are in the right place!</p><p>I am dedicated to</p><ul><li>blogs</li><li>movies links</li><li>software links</li></ul><p></p><p>If you need anything don t hesitate to contact me!</p><p>I look forward to working with you!</p><p>Dheeraj </p>
            </div>
            <Footer />
        </div>
    )
}

export default about