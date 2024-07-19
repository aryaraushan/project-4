import React from 'react'

function Explor_card(props) {

  return (
    <div className='w-96 h-[500px]  flex flex-col gap-6   items-center justify-center'>
     <div className='overflow-hidden rounded-lg'>
      <img className='h-96 w-[600px] object-cover object-center duration-200 hover:scale-110' src={props.src} />
     </div>
     <div className='flex gap-6 justify-center  items-center'>
      <img className='h-14 w-[80px] rounded-full  border-red-800' src={props.image1} />
      <h1 className='text-xl  font-medium leading-5 '>{props.heading}</h1>
     </div>
     <div className='flex justify-center gap-8'>
    <div className='flex items-center justify-center gap-2'>
    <i className={`text-3xl text-red-400 ${props.i1}`}></i> 
      <p className=' font-light text-l text-gray-400'>{props.p1}</p>
    </div>
    <div className='flex justify-center items-center gap-2 '>
    <i className={`text-3xl text-red-400 ${props.i2}`}></i>
      <p className=' font-light text-gray-400 text-1'>291 Students</p>
    </div>
    <div className='flex justify-center items-center gap-2'>
    <i className={`text-3xl text-red-400 ${props.i3}`} ></i>
      <p className=' font-light text-gray-400 text-1'>4.7</p>
      
    </div>
     </div>
    <hr className='border w-full border-gray-100'/>

     <div className=' flex justify-center items-center gap-4 '>
      <button className='border rounded bg-red-100 px-6 py-2 text-lg hover:bg-red-400 hover:text-gray-200 '>{props.title}</button>
      <button className='border rounded bg-red-100 px-7 py-2 text-lg  hover:bg-red-400 hover:text-gray-200'>{props.title1}</button>
      <p className='text-xl font-bold'>{props.title2}</p>
     </div>
     
     
    
    </div> 
  )
}

export default Explor_card