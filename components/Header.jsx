import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Nav from './Nav';
const Header = () => {
    return( 
    <header className=' py-8 xl:py-12 text-white bg-pink-50/20'>
        <div className="container mx-auto">
            <Link href="/">
            <h1 className='text-4xl font-semibold'>Razzak<span className='text-accent'>.</span> </h1>
            </Link>
            {/* desktop nav */}
            <div className="hidden lg:flex gap-4">
            <Nav></Nav>
            <Link href="/contact">
            <Button>Hire me</Button>
            </Link>
            </div>
            {/* mobile Nav */}
            <div className="xl:hidden">Mobile Nav</div>
        </div>
    </header>
    );
};

export default Header;