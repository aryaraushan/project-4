import React from 'react'
// import Page4 from '/./card/Card1'
import Top_card from '../card/Top_card'

function Categories() {
  return (
    <div className=" w-full p-20 flex-col justify-between items-center flex object-cover object-center gap-10   bg-[url('https://e-pora-next.vercel.app/assets/img/bg/shape-bg-1.png')] ">
              <h1 className='text-4xl font-bold '>Top Categories</h1>

          <div className='  flex  justify-center items-center mt-12 gap-10  '>
            <Top_card image=" https://e-pora-next.vercel.app/assets/img/category/category-01.png" title="Design Deve" />
            <Top_card image="	https://e-pora-next.vercel.app/assets/img/category/category-02.png" title="Design Deve" />
            <Top_card image="	https://e-pora-next.vercel.app/assets/img/category/category-03.png" title="Design Deve" />
            <Top_card image=" https://e-pora-next.vercel.app/assets/img/category/category-04.png" title="Design Deve" />
            </div>

            <div className=' flex  justify-center items-center gap-10 shadow-2xl    '>
            <Top_card  image="	https://e-pora-next.vercel.app/assets/img/category/category-05.png" title="Design Deve" />
            <Top_card  image="	https://e-pora-next.vercel.app/assets/img/category/category-06.png" title="Design Deve" />
            <Top_card  image="	https://e-pora-next.vercel.app/assets/img/category/category-07.png" title="Design Deve" />
            <Top_card  image="  https://e-pora-next.vercel.app/assets/img/category/category-08.png" title="Design Deve" />
            </div>
          </div>
    
  )
}

export default Categories