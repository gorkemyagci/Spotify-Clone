import { Icon } from 'icons'
import React, { useState } from 'react'

const Search = () => {
    const [search,setSearch] = useState('');
  return (
    <div className='mr-auto ml-4 h-10 relative'>
        <label htmlFor='search-input' className='text-gray-800 w-10 h-12 flex left-0 top-0 justify-center absolute items-center'>
        <Icon name="search" size={24}/>
        </label>
        <input
        type="text"
        id='search-input'
        value={search}
        autoFocus={true}
        onChange={(e) => setSearch(e.target.value)}
        className='h-12 pl-10 bg-white max-w-full w-[22.75rem] placeholder-black/40 outline-none font-medium rounded-3xl text-sm text-black'
        placeholder='Ne dinlemek istiyorsun?'
        />
    </div>
  )
}

export default Search