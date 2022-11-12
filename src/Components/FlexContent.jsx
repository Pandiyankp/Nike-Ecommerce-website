import React from 'react'

const FlexContent = ({ ifExists,endpoint:{title,heading,text,img ,url,btn}}) => {
  return (
<>

<div className={`flex items-center justify-between    lg:justify-center md:justify-center
    nike-container ${ifExists ? 'flex-row-reverse' : 'flex-row'}
    `}>
    <div className='max-w-lg  w-full md:text-center  grid items-center
    md:justify-items-center '>
<h1 className='text-4xl sm:text-3xl font-bold text-gradient  '>{heading}</h1>
<h1 className=' text-5xl lg:text-4xl md:text-3xl  sm:text-2xl font-bold text-slate-900
drop-shadow-lg
'>{title}</h1>
<p className='xl:text-sm my-4 text-slate-900'>{text}</p>
<a href={url} className='flex items-center ' target={'_blank '} role="button"> 
<button type='button' className='button-theme bg-slate-900 text-slate-100 py-1.5' >{btn}</button></a>
    </div>
    <div className='flex items-center justify-center max-w-xl
    relative  w-full
    '>
        <img src={img} alt={`img/${heading}`} 
        className={`w-auto  object-fill md:mt-5
        transition-theme ${ifExists ? 'h-60 md:h-56 sm:h-52 xsm:h-44  rotate-0 hover:-rotate-12' 
        : 'h-72 md:h-64 sm:h-60 xsm:h-48  rotate-0 hover:-rotate-12'}
        `}
        />
    </div>
    
    </div></>  )
}

export default FlexContent