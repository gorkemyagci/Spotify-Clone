import React from 'react'

const Agreement = () => {
  return (
    <div className=' agreement-wrapper flex flex-col items-start gap-y-10 font-medium'>
        <div className='agreement-1'>
            <input
            type="checkbox"
            />
            <label className='pl-2.5 text-[0.825rem] tracking-tight'>Spotify'dan yenilik ve teklif bilgilendirmeleri almak istiyorum</label>
        </div>
        <div className='agreement-2'>
            <input
            type="checkbox"
            />
            <label className='pl-2.5 text-[0.825rem] tracking-tight'>Kayıt verilerimi pazarlama amaçlarıyla Spotify'ın içerik sağlayıcılarıyla paylaşın. Verilerinin gizlilik politikamızda belirtildiği gibi AEA dışındaki bir ülkeye aktarılabileceğini unutma.</label>
        </div>
    </div>
  )
}

export default Agreement