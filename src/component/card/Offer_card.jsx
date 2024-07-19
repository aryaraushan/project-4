import React from 'react'

function Offer_card(props) {
  return (
    <div>
          <div className='w-full flex items-center justify-center gap-5 '>
                <div className='box h-80 w-72 bg-white p-7 shadow-2xl rounded-xl gap-4'>
                <img className='h-20 w-20 rounded-full object-cover object-center' src={props.image} alt="" />
                <h1 className='text-2xl font-semibold text-black mt-5'>{props.name} </h1>
                <p className='font-normal text-base text-gray-400 mt-8'> {props.title}</p>

             </div>
        </div>
    </div>
  )
}

export default Offer_card