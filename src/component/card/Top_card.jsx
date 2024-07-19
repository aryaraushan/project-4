import React from 'react'

function Top_card(props) {
  return (
    <div className='w-full flex flex-col   '>  
               
            <div className='  h-20 w-60 bg-gray-100 flex items-center gap-8 rounded-lg p-5 shadow-2xl '>
            <img className='icon  box h-10 w-10 objext-cover object-center rounded-full'  src={props.image} alt="" />
            <h1 className=' text text-xl'>{props.title}</h1>
            </div>
            </div>
    
    
  )
}

export default Top_card