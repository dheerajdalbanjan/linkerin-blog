import React from 'react'
import { HiAcademicCap, HiOutlineDocumentText, AiOutlineSearch,BsShareFill } from 'react-icons/fa';

import Blogcard from './Blogcard'
import Link from 'next/link'

const Features = ({data}) => {

    const features = [
      [
        {
          title: 'Category Navigation',
          description: 'Allow users to easily navigate between categories with clear labels and intuitive icons.',
          icon: <HiAcademicCap className="h-8 w-8" aria-hidden="true" />
        },
        {
          title: 'Related Posts',
          description: 'Suggest related posts at the end of each article to encourage users to read more content and improve time spent on site.',
          icon: <HiAcademicCap className="h-8 w-8" aria-hidden="true" />
        },
        {
          title: 'Search Bar',
          description: 'Include a prominent search bar to help users quickly find the content they are looking for.',
          icon: <AiOutlineSearch className="h-8 w-8" aria-hidden="true" />
        },
        {
          title: 'Social Sharing',
          description: 'Make it easy for users to share articles on social media by including social sharing buttons at the top and bottom of each article.',
          icon: <BsShareFill className="h-8 w-8" aria-hidden="true" />
        }
      ]
      ]
    return (
        <div>
            <div className="bg-white py-8 sm:24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="sm:text-center">
                        <h2 className="text-lg font-semibold leading-8 text-indigo-600">Transactions</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>

                    <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                                        {feature.icon}
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                                        <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto py-5 px-4 md:px-8'>
              <h2 className='md:text-4xl text-3xl font-bold text-gray-800 mb-5'>Featured Posts</h2>
              <div className='flex flex-col space-y-3 divide-y'>
                {
                  data && data.map((e, i)=><Blogcard data={e} key={i}/>)
                }
              </div>
              <Link href={'/blog'} className='rounded-full border border-solid border-gray-500 px-4 py-2 float-right font-bold text-gray-700 hover:bg-gray-100 active:ring-2 ring-gray-300 transition-all duration-500 focus:ring-2'>Explore more</Link>
            </div>
        </div>
    )
}

export default Features