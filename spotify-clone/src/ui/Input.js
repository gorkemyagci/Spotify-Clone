import React from 'react'

const Input = ({label,type = "text",placeholder,props}) => {
  return (
    <div className='flex flex-col items-start gap-y-3'>
    <label className='text-sm font-bold text-black'>
        {label}
    </label>
    <input
     type={type}
     placeholder={placeholder}
     {...props}
     className="h-[3.25rem] outline-none rounded-md border border-gray-600 placeholder:text-gray-500 placeholder:font-semibold hover:border-black pl-2 w-[28.125rem]"
    />
    </div>
  )
}

export default Input