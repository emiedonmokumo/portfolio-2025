'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='font-montserrat py-5 sm:relative text-gray-600'>
            <div className={`flex justify-between items-center`}>
                {/* Logo */}
                <div>
                    <Link href={'/'} className='font-semibold hover:text-gray-400 sm:text-sm'>Emiedonmokumo.</Link>
                </div>

                {/* Desktop Menu */}
                <div className='space-x-3 sm:hidden'>
                    <Link href={'#'} className='p-3 rounded-full hover:border hover:bg-gray-400 hover:bg-opacity-5'>About</Link>
                    <Link href={'/skills'} className='p-3 rounded-full hover:border hover:bg-gray-400 hover:bg-opacity-5'>Skills</Link>
                    <Link href={'/projects'} className='p-3 rounded-full hover:border hover:bg-gray-400 hover:bg-opacity-5'>Projects</Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className='lg:hidden'>
                    <button onClick={toggleMobileMenu} className='p-2'>
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Slide-In Effect */}
            {isMobileMenuOpen && (
                <motion.div
                    className='lg:hidden fixed top-0 left-0 p-5 z-10 h-screen bg-white w-full overflow-hidden flex flex-col items-end text-right' // Changed w-[100%] to w-full
                    initial={{ x: '-100%' }} // Start from the right
                    animate={{ x: 0 }} // Slide to the normal position
                    exit={{ x: '100%' }} // Slide back to the right
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }} // Customize the speed and easing
                >
                    <button onClick={toggleMobileMenu} className='p-2 sm:mb-8'>
                        {isMobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    <div>
                        <ul className='flex flex-col space-y-2'>
                            <li><button onClick={toggleMobileMenu}><Link href={'/'} className=''>Home</Link></button></li>
                            <li><Link href={'#'} className=''>About</Link></li>
                            <li><button onClick={toggleMobileMenu}><Link href={'/skills'} className=''>Skills</Link></button></li>
                            <li><Link href={'/projects'} className=''>Projects</Link></li>
                        </ul>
                    </div>
                </motion.div>
            )}


        </nav>
    );
};

export default NavBar;
