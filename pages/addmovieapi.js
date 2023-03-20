import axios from 'axios'
import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Addmovieapi = () => {
  const [movie, setmovie] = useState(null);
  const [number, setNumber] = useState(null); 
  const [nsub, setnsub] = useState(false); 

  const [submit, setSubmit] = useState(null);
  const [sucess, setSucess] = useState(null);
  const [fail, setFail] = useState(null);
  function NewArray(size) {
    var x = [];
    for (var i = 0; i < size; i++) {
        x[i] = {
          name : '', 
          link : '', 
          genre : ''
        };
    }
    return x;
}
  function handlenchange(e){
    const {value} = e.target ;
    setNumber(value) ;
  }
  function handlensubmit(e){
    e.preventDefault(); 
    setmovie(NewArray(number))
    setnsub(!nsub); 
  }
  function handleChange(e){
    const {name, value} = e.target ;
    const sname = name.split('_');
    console.log(sname)
    setmovie(prev => (
      prev.map((e, i)=>{
        if(i == sname[1]){
          return {
            ...e, 
            [sname[0]] : value
          }
        }
        else {
          return e ;
        }
      })
    ))
  }
  const sendrequest = async () => {
    const res = await axios.post('/api/addmovieapi', movie, { headers: { "Content-Type": "application/json" } });
    const data = await res.data;
    return data;
  }
  function handleSubmit(e){
    let st ; 
    e.preventDefault(); 
    sendrequest().then(data => { setSucess(data.status); setFail(!data.status); setSubmit(null) }).catch(err => {console.log(err); setSucess(null); setFail(1); setSubmit(null)})
  }
  return (
    <div style={{fontFamily:'Roboto, sans-serif'}}>
      <Head>
        <title>Add movie</title>
      </Head>
      <Navbar />
      {
                sucess && <div className='bg-green-200 h-60 mx-4 md:mx-auto max-w-6xl  my-6 rounded-xl text-center flex items-center justify-center text-4xl text-green-700 font-extrabold'>Successfully Added Movies</div>
            }
            {
                fail && <div className='bg-red-200 h-60 max-w-6xl mx-4 md:mx-auto my-6 rounded-xl text-center flex items-center justify-center text-4xl text-red-700 font-extrabold'>Couldn&lsquo;t Add Movies, try again</div>
            }
            {submit ?
                < div className='h-screen cursor-progress w-screen fixed inset-0 top-0 flex items-center justify-center bg-gray-600 bg-opacity-70 '>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className='w-24 h-24 duration-1000 animate-spin text-gray-200'>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}<span class="loader"></span>
                </div> : null
            }
      {!sucess && !fail && <main className='px-4 max-w-7xl mx-auto min-h-screen py-6'>
        <h1 className='text-3xl font-extrabold text-gray-700 mb-6'>Add Movie</h1>
        <form className='flex md:flex-row flex-col space-y-3 w-full items-end space-x-0 md:space-x-4 md:justify-between' onSubmit={handlensubmit}>
            <div className='flex flex-col  space-y-2 w-full md:w-[90%]'>
              <label for='number' className='text-lg font-medium text-gray-600 '>Enter the number of movies</label>
              <input  type={'number'} name='number' value={number} onChange={handlenchange} id='number' className='max-w-7xl outline-none px-2 py-1 border-2 border-gray-400 focus:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 ' />
            </div>
            <button type='submit'  className='border-2 border-gray-700 text-gray-700 px-4 py-1 h-fit hover:bg-gray-700 hover:text-gray-100 active:ring-4 ring-gray-300 transition-colors duration-500 font-medium'>Submit</button>
          </form>
        {nsub && <form className='flex flex-col' onSubmit={handleSubmit}>
          {
            movie.map((e, i)=><div key={i} className='my-4 flex flex-col space-y-2'>
              <h2 className='text-gray-600 font-bold text-lg'>{i+1}</h2>
              <input onChange={handleChange} placeholder='Enter the name of the movie' type={'text'} value={e.name} name={`name_${i}`} className='px-4 py-1 border-2 border-gray-400 hover:outline-none outline-none hover:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 w-full'/>
              <div className='flex space-x-2' >
                <input onChange={handleChange} type={'text'} value={e.link} name={`link_${i}`} placeholder='Enter the link' className='px-4 py-1 border-2 border-gray-400 hover:outline-none outline-none hover:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 w-1/2'/>
                <input onChange={handleChange} type={'text'} value={e.genre} name={`genre_${i}`} placeholder='Enter the genre' className='px-4 py-1 border-2 border-gray-400 hover:outline-none outline-none hover:border-gray-600 focus:ring-4 ring-gray-200 transition-all duration-500 w-1/2'/>
              </div>
            </div>)
          }
          <button type='submit' onClick={()=>setSubmit(true)} className='border-2 w-fit float-right border-gray-700 text-gray-700 px-4 py-1 h-fit hover:bg-gray-700 hover:text-gray-100 active:ring-4 ring-gray-300 transition-colors duration-500 font-medium'>Submit Movies</button>
        </form>}
      </main>}
      <Footer />
    </div>
  )
}

export default Addmovieapi