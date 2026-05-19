import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:justify-between md:gap-0 md:flex-row md:items-start bg-gray-600 p-8 rounded-lg'>
      <div className=''>
        <Link href="/" className='flex items-center'>
        <p className='hidden md:block text-md font-medium tracking-wider'>ShopOn</p>
        </Link>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-cyan-500'>Links</p>
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms and conditions</Link>
        <Link href="/">privacy policy</Link>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-cyan-500'>Links</p>
        <Link href="/">Blog</Link>
        <Link href="/">Brands</Link>
        <Link href="/">affiliation</Link>
        <Link href="/">Service Centers</Link>
      </div>
      <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
        <p className='text-cyan-500'>Links</p>
        <Link href="/">EMI Information</Link>
        <Link href="/">Delivery Policy</Link>
        <Link href="/">Refund and Return Policy</Link>
        <Link href="/">Career</Link>
      </div>
    </div>
  )
}

export default Footer