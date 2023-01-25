import { Icon } from 'icons'
import React from 'react'

const DownloadApp = () => {
  return (
    <div className='h-10 text-sm cursor-pointer hover:text-white text-link flex-shrink-0 flex items-center px-6 gap-x-4'>
        <span>
            <Icon name="download" size={20}/>
        </span>
       <span className='font-semibold'>Uygulamayı Yükle</span>
    </div>
  )
}

export default DownloadApp