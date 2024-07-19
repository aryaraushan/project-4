import React from 'react'

function Header() {
  return (
    <div className='navbar h-screen w-screen bg-black text-white '>
      <div className=" h-screen w-screen object-cover object-cente bg-[url('https://e-pora-next.vercel.app/assets/img/banner/banner-01.jpg')]">
           
      <div className="navbar h-18 w-full border flex bg-[#245C51]  items-center justify-between p-7  ">
        <div className="flex gap-5 items-center ">
        <img className='h-7 w-32 object-cover object-center' src="https://e-pora-next.vercel.app/assets/img/logo/logo.png" />
        <button className=' px-7 py-2 rounded-md bg-[#FF6652]'>Categories</button>
       
        </div>
        
        <div className='text-white text-xl font-sm flex gap-10'>
        <a className='hover:text-[#FF6652]'  href="">Home</a>
        <a className='hover:text-[#FF6652]' href="">pages</a>
        <a className='hover:text-[#FF6652]' href="">Introdc</a>
        <a className='hover:text-[#FF6652]' href="">Blog</a>
        <a className='hover:text-[#FF6652]' href="">Image</a>
        </div>

        <div className=''>
              <input className='px-8 py-3 broder-none rounded-r-full  rounded-l-full border border-[#FF6652] hover:bg-[#FF6652] ' type="text" id="fname" name="fname" placeholder='Search' />
        </div>
        
      </div>

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

export default Header