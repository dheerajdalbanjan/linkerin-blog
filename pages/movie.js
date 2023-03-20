
import axios from 'axios'
import mongoose from 'mongoose'
import Head from 'next/head'
import Link from 'next/link'
import React, { use, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import movie from '../models/movie'
import blog from '../models/blog'

const Moviee = ({ movies, blog }) => {
  const [query, setQuery] = useState(null); 
  const [smovies, setSmovies] = useState(null); 
  const [submit, setSubmit] = useState(null); 
  const [load, setLoad] = useState(null); 
  const sendrequest = async ()=>{
    const res = await axios.post('/api/searchmovie', query,  { headers: { "Content-Type": "application/json" } }) ;
    const data = await res.data ; 
    return data ; 
  }
  function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
  function handleChange(e){
    const {value} = e.target ;
    setQuery(value)
  }
  function handleSubmit(e){
    setSubmit(1); 
    setLoad(1); 
      if(query){
        sendrequest().then(data=>{setSmovies(data.movies); setLoad(null)}).catch(err=>console.log(err))
      }
  }
  return (
    <div>
      <Head>
        <title>Movies</title>
      </Head>
      <Navbar />
      <main className='max-w-7xl mx-auto px-4 min-h-screen' style={{fontFamily:'Roboto, sans-serif'}}>
      {load && < div className='h-screen cursor-progress w-screen fixed inset-0 top-0 flex items-center justify-center bg-gray-600 bg-opacity-70 '>
                   <span class="loader"></span>
                </div> }
        <div className='flex justify-between items-center space-x-5'>
          <h1 className='text-3xl font-extrabold text-gray-700 my-6 transition-all duration-500'>{submit?`${query} results`:'All movies'}</h1>
          <div className='transition-all duration-500 w-32 md:focus-within:w-52 focus-within:w-40 focus-within:shadow-xl ring-gray-100 shadow-lg rounded-full  border border-gray-300 flex items-center justify-between'>
            <input type={'text'} name='query' value={query} onChange={handleChange} placeholder='Search...' className='rounded-full text-gray-600 font-normal peer px-4 py-2 w-full h-full focus:outline-none' />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={handleSubmit} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rounded-full focus:bg-slate-100 text-gray-500 font-bold mr-2 cursor-pointer ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </div>
        </div>
        <button onClick={()=>{setSubmit(null)}} className='rounded-full active:ring-2 ring-gray-100 px-4 py-1 border border-gray-300 text-lg text-gray-600 '>All movies</button>
        {!submit && movies && movies.map((e, i) =>
          <Link href={`/blog/${getRandomItem(blog)._id}?movie_id=${e._id}`} key={i} className='group flex transition-all  duration-500 justify-between w-full px-4 py-3 border-gray-300 border shadow-md hover:shadow-lg cursor-pointer rounded-lg my-4'>
            <h2 className='text-lg w-2/3 font-semibold text-gray-600 '>{`${i + 1}. ${e.name}`}</h2>
            <p className=' px-3 rounded-full h-8 w-fit text-gray-50 py-1 bg-gray-500'>{e.genre}</p>
          </Link>
        )}
        {submit && smovies && smovies.length != 0?smovies.map((e, i) =>
          <Link href={`/blog/${getRandomItem(blog)._id}?movie_id=${e._id}`} key={i} className='group flex transition-all  duration-500 justify-between w-full px-4 py-3 border-gray-300 border shadow-md hover:shadow-lg cursor-pointer rounded-lg my-4'>
            <h2 className='text-lg  font-semibold text-gray-600 '>{`${i + 1}. ${e.name}`}</h2>
            <p className=' px-3 rounded-full h-fit text-gray-50 py-1 bg-gray-500'>{e.genre}</p>
          </Link>
        ):<h2 className='text-2xl font-bold text-gray-500 ml-1 my-3'>{submit && 'No result found'}</h2>}
      </main>
      <Footer />
    </div>
  )
}

export default Moviee


export async function getServerSideProps(context) {
  let movies, blogd;
  if (!mongoose.connections[0].readyState) {
    mongoose.connect(process.env.MONGO_URI);
  }
  try {
    movies = await movie.find();
    blogd = await blog.find(); 
  } catch (err) {
    console.log(err)
  }
  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)).reverse(), 
      blog: JSON.parse(JSON.stringify(blogd)).reverse()
    }
  }
}