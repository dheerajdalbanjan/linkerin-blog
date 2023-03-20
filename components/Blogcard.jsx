import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blogcard = ({ data }) => {
    return (
        <Link href={`/blog/${data._id}`} className='py-5 flex md:flex-row space-y-3 items-center  md:space-x-6 flex-col group bg-white w-full md:h-64 md:max-h-72 cursor-pointer '>
            <div className='md:w-2/5 overflow-hidden mt-4 mb-1 h-full '><img src={data.image} alt={data.title} className='group-hover:scale-105 shadow-lg object-cover h-full w-full group-hover:opacity-80 transition-all duration-500 ' /></div>
            <div className='md:w-3/5 h-fit'>
                <h2 className='text-xl md:text-2xl font-bold tracking-tight text-gray-800 mb-2 group-hover:underline'>{data.title}</h2>
                <p className='md:text-base text-gray-600 font-normal'>{data.description.slice(0, 80)}{'...'}</p>
                <p className='text-sm font-light text-gray-500 my-1 '>{data.author}</p>
                <p className='text-sm bg-gray-200 rounded-full  flex-row-reverse items-center text-gray-600 px-[9px] mb-2 mt-1 py-[1px] inline-flex'>{data.date.split('T')[0]}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 mr-2  h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                </p>
                <div className='flex flex-row space-x-2 '> 
                    {data && data.tags.split(", ").slice(0,4).map((e, i)=><div key={i} className='text-xs py-1 px-2 text-gray-700 rounded-full bg-yellow-200 text-center group-hover:bg-yellow-100 group-hover:text-gray-800'># {e}</div>)}
                </div>
            </div>
        </Link>
    )
}

export default Blogcard