import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { GoBell } from 'react-icons/go'
import { BsCart } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between border-b border-gray-400 pb-3'>
        {/* left */}
        <Link href="/">
        <p className='hidden md:block text-md font-medium tracking-wider'>ShopOn</p>
        </Link>
        <div>

        </div>
        {/* right */}
        <div className='flex items-center gap-5'>
            <SearchBar/>
            <GoBell className='w-4 h-4 text-gray-600'/>
            <BsCart className='w-4 h-4 text-gray-600'/>
            <Link href='/login'>
            Sign in
            </Link>
        </div>
    </div>
  )
}

export default Header