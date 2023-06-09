import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const contact = () => {
    return (
        <div>
            <Head>
                <title>Contact Us</title>
            </Head>
            <Navbar/>
            <div className="flex min-h-[90vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{fontFamily:'Roboto, sans-serif'}}>
                <div className="w-full max-w-md space-y-8">
                    <div>
                        
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Contact Us
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                you will have to go through more of our blogs
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6 -z-[2000]" action="mailto:dheerajdalbanjan4@gmail.com" method='post'>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="text" className="sr-only">
                                    Type your feedback
                                </label>
                                <input
                                    id="text"
                                    name="text"
                                    type="text"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Say something"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Keep me updated
                                </label>
                            </div>

                            
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default contact