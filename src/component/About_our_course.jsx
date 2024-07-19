import React from 'react'
import './About_our_course.css'

function About_our_course() {
  return (
    <div className='w-screen flex px-16 py-12  '>
        <div className="h-full w-1/2  flex justify-center  ">
              <div className="h-[750px] w-[500px] flex flex-col relative  bg-[url('https://e-pora-next.vercel.app/assets/img/about/about-img.png')] bg-no-repeat">
               <div className='flex flex-col'>
               <img className='absolute top-[-60px]  right-[-50px]  object-cover object-center' src="https://e-pora-next.vercel.app/assets/img/about/about-shape-05.png" alt="" />
                <img className=' img h-[200px] w-[250px] absolute top-20 right-[-80px] object-cover object-center' src="https://e-pora-next.vercel.app/assets/img/about/about-shape-01.png" alt="" />
                <img className=' h-[ 200px] w-[202px] absolute bottom-20 right-[-70px]  object-cover object-center' src="https://e-pora-next.vercel.app/assets/img/about/about-shape-02.png" alt="" />
               <img className='absolute top-64 left-[-50px] object-cover object-center h-40 w-40' src="https://e-pora-next.vercel.app/assets/img/about/about-shape-04.png" alt="" />
               </div>

                 </div>
        </div>
        <div className='h-full w-[600px] flex flex-col items-center justify-center px-6 py-20   '>
        <div className='w-[500px] '>
          <p className='text-2xl font-semibold text-[#FF6652]'> About Our Courses</p> 
          <h1 className='text-5xl font-semibold mt-5 text-gray-800 from-neutral-300 '> Explore Thousands of <br /> Creative Classes.</h1>
          <p className='text-lg text-gray-500 mt-6'>Dramatically supply transparent deliverables beforese backward comp internal or "organic" sources. Comp transparent leverage other.</p>
          <button className=' px-10 text-white py-3 mt-12 rounded-lg bg-[#FF6652]'>Read More</button>
           </div>
        </div>
    </div>
  )
}

export default About_our_course