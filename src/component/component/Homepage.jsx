import React from 'react'

function Homepage() {
  return (
    <div className='h-screen w-screen bg-black text-white'>
         <div className=" h-screen w-screen object-cover object-cente bg-[url('https://e-pora-next.vercel.app/assets/img/banner/banner-01.jpg')]">   

          <div className=' h-full w-full flex items-center justify-center  gap-40'>
          <div className='w-[500px] '>
          <p className='text-xl'> Learn New Skills & Popular Courses</p> 
          <h1 className='text-6xl mt-5 from-neutral-300 '> For Every Student,<br /> Every <samp className='text-[#FF6652]'>Classroom</samp>.</h1>
          <p className='text-lg mt-6'>Dramatically supply transparent deliverables before backward
           comp internal or "organic" sources. Competently leverage other.</p>
          <button className=' px-8 py-3 mt-10 rounded-lg bg-[#FF6652]'>Explore Cource</button>
          </div>
          <div className='w-[500px] h-[500px]  bg-clip-content p-2  border-4 border-violet-300 border-dashed flex items-center justify-center rounded-full mt-[-70px]'>
          <img className='h-[450px] w-[450] object-cover object-center rounded-full' src="https://i.pinimg.com/564x/cb/ea/d5/cbead5216351735fd535a81fdc684fb6.jpg" alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage