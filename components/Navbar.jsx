import React from 'react'
import { Disclosure, Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { useScroll, motion, useSpring } from 'framer-motion'

const Navbar = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress)
    return (
        <Popover as='nav'>
            <div className='bg-white px-4 max-w-7xl mx-auto ' style={{fontFamily:'Roboto, sans-serif'}}>
                <div className='flex items-center justify-between py-6 border-b-2 '>
                    <div>
                        <Link className='text-xl font-bold font-sans text-gray-700' href='/'>LinkerIn</Link>
                    </div>
                    <Popover.Button className={'flex flex-col md:hidden ui-open:border-none ui-open:outline-none focus:outline-none'}>
                        <div className='w-6 h-[1px] my-[3px] ui-open:my-[0px] ui-open:-rotate-[135deg] bg-gray-800 transition-transform duration-500'></div>
                        <div className='w-6 h-[1px] my-[3px] bg-gray-800 ui-open:hidden transition-transform duration-500'></div>
                        <div className='w-6 h-[1px] my-[3px] ui-open:my-[-1px] ui-open:rotate-[135deg] bg-gray-800 transition-transform duration-500'></div>
                    </Popover.Button>
                    <Popover.Group as='nav' className={'md:flex hidden space-x-0.5'}>
                        <Link href={'/'} className='text-base px-2 hover:bg-gray-200 py-2 duration-500 transition-colors rounded-lg font-medium text-gray-500 hover:text-gray-900'>Home</Link>
                        <Link href={'/about'} className='text-base px-2 hover:bg-gray-200 py-2 duration-500 transition-colors rounded-lg font-medium text-gray-500 hover:text-gray-900'>About</Link>
                        <Link href={'/contact'} className='text-base px-2 hover:bg-gray-200 py-2 duration-500 transition-colors rounded-lg font-medium text-gray-500 hover:text-gray-900'>Contact</Link>
                        <Link href={'/privacypolicy'} className='text-base px-2 hover:bg-gray-200 py-2 duration-500 transition-colors rounded-lg font-medium text-gray-500 hover:text-gray-900'>Privacy</Link>
                        <Popover>
                            <Popover.Button className='text-base px-2  hover:bg-gray-200 py-2 duration-500 transition-colors rounded-lg flex space-x-1 font-medium text-gray-500 hover:text-gray-900 focus:outline-none ui-open:outline-none'>
                                <p>Blogs</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 mt-1 h-5 ui-open:-rotate-180 transition-transform duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>

                            </Popover.Button>
                            <Transition
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className={'absolute right-0 top-8 w-40 flex flex-col  z-50  bg-white rounded-lg ring-1 ring-black ring-opacity-10 py-5 px-2 shadow-lg'}>
                                    <Link href={'/blog?category=Technology'} className='text-base py-2 rounded-lg hover:bg-gray-100 transition-colors duration-500 px-4 hover:text-gray-900 text-gray-700 font-normal'>Technology</Link>
                                    <Link href={'/blog?category=Education'} className='text-base py-2 rounded-lg hover:bg-gray-100 transition-colors duration-500 px-4 hover:text-gray-900 text-gray-700 font-normal'>Education</Link>
                                    <Link href={'/blog?category=Business'} className='text-base py-2 rounded-lg hover:bg-gray-100 transition-colors duration-500 px-4 hover:text-gray-900 text-gray-700 font-normal'>Business</Link>
                                    <Link href={'/blog?category=Sports'} className='text-base py-2 rounded-lg hover:bg-gray-100 transition-colors duration-500 px-4 hover:text-gray-900 text-gray-700 font-normal'>Sports</Link>
                                    <Link href={'/blog?category=Health'} className='text-base py-2 rounded-lg hover:bg-gray-100 transition-colors duration-500 px-4 hover:text-gray-900 text-gray-700 font-normal'>Health</Link>
                                </Popover.Panel>
                            </Transition>
                        </Popover>
                    </Popover.Group>
                    <motion.div style={{ scaleX }} className='fixed top-0 left-0 right-0 h-[4px] origin-left bg-purple-600 rounded-full'></motion.div>
                </div>
            </div>
            <Popover.Overlay className={'fixed inset-0 bg-black opacity-30 h-full  w-full'} />
            <Transition
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className={'absolute right-3 origin-top-right top-0 p-2 md:hidden w-[95%] transition-transform'}>

                    <div className='bg-white  ring-1 ring-black shadow-lg rounded-lg ring-opacity-5  w-full py-8 px-4'>
                        <div className='flex flex-col space-y-2 bg-white'>
                            <Link href={'/'} className=' font-medium px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 text-gray-700 text-lg hover:text-gray-900 outline-none '>Home</Link>
                            <Link href={'/about'} className=' font-medium px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 text-gray-700 text-lg hover:text-gray-900 outline-none '>About</Link>
                            <Link href={'/contact'} className=' font-medium px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 text-gray-700 text-lg hover:text-gray-900 outline-none '>Contact</Link>
                            <Link href={'/privacypolicy'} className=' font-medium px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 text-gray-700 text-lg hover:text-gray-900 outline-none '>Privacy</Link>
                            <Disclosure>
                                <Disclosure.Button className='flex font-medium px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 text-gray-700 text-lg hover:text-gray-900 outline-none '>Blogs<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 mt-1 h-5 ml-1  transition-transform duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg></Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                <Disclosure.Panel className={'flex flex-col space-y-2 pl-3 ml-4 border-l-2 border-blue-300'}>
                                    <Link href={'/blog?category=Technology'} className='text-base  px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 hover:text-gray-900 text-gray-700 font-normal'>Technology</Link>
                                    <Link href={'/blog?category=Education'} className='text-base px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 hover:text-gray-900 text-gray-700 font-normal'>Education</Link>
                                    <Link href={'/blog?category=Business'} className='text-base px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 hover:text-gray-900 text-gray-700 font-normal'>Business</Link>
                                    <Link href={'/blog?category=Sports'} className='text-base px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 hover:text-gray-900 text-gray-700 font-normal'>Sports</Link>
                                    <Link href={'/blog?category=Health'} className='text-base px-4 py-2 rounded-lg hover:bg-gray-100 duration-300 hover:text-gray-900 text-gray-700 font-normal'>Health</Link>
                                </Disclosure.Panel>
                                </Transition>
                            </Disclosure>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default Navbar