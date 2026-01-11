import React from 'react'
import { GoSearch } from 'react-icons/go'

const SearchBar = () => {
  return (
    <div className='hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-50 px-2 py-1 shadow-md'>
        <GoSearch className='w-5 h-5 text-gray-600'/>
        <input type="text" id='Search' className='text-sm outline-0' />
    </div>
  )
}

export default SearchBar