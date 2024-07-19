import React from 'react'
// import Card2 from '../card/'
import Explor_card from '../card/Explor_card'

function Explore_popular() {
  return (
       <div className='flex h-auto w-full  flex-col justify-center '>
        <h1 className='text-5xl font-bold ml-16 mt-3'>Explore Popular Courses</h1>
    <div className='h-screen w-screen flex  items-center justify-center gap-6 p-9'>
    
        <Explor_card src="https://e-pora-next.vercel.app/assets/img/course/course-thumb-02.jpg" image1="	https://e-pora-next.vercel.app/assets/img/icon/course-avata-02.png" heading="The Complete 2022 Web Development Camp" i1="ri-play-circle-fill" p1="35 Classes" i2="ri-user-fill" p2="291 Students" i3="ri-star-half-line" p3="4.7" title="Design" title1="Development" title2="%29.99" />
        <Explor_card src="https://e-pora-next.vercel.app/assets/img/course/course-thumb-03.jpg" image1="	https://e-pora-next.vercel.app/assets/img/icon/course-avata-03.png" heading="The Complete 2022 Web Development Camp" i1="ri-play-circle-fill" p1="35 Classes" i2="ri-user-fill" p2="291 Students" i3="ri-star-half-line" p3="4.7" title="Design" title1="Development" title2="%29.99" />
        <Explor_card src="https://e-pora-next.vercel.app/assets/img/course/course-thumb-04.jpg" image1="https://e-pora-next.vercel.app/assets/img/icon/course-avata-04.png" heading="The Complete 2022 Web Development Camp" i1="ri-play-circle-fill" p1="35 Classes" i2="ri-user-fill" p2="291 Students" i3="ri-star-half-line" p3="4.7" title="Design" title1="Development" title2="%29.99" />
    </div>


    <div className='h-screen w-screen flex  items-center justify-center gap-6 mt-[-100px] p-9'>
    
        <Explor_card src="https://e-pora-next.vercel.app/assets/img/course/course-thumb-02.jpg" image1="	https://e-pora-next.vercel.app/assets/img/icon/course-avata-05.png" heading="The Complete 2022 Web Development Camp" i1="ri-play-circle-fill" p1="35 Classes" i2="ri-user-fill" p2="291 Students" i3="ri-star-half-line" p3="4.7" title="Design" title1="Development" title2="%29.99" />
        <Explor_card src="https://e-pora-next.vercel.app/assets/img/course/course-thumb-03.jpg" image1="https://e-pora-next.vercel.app/assets/img/icon/course-avata-06.png" heading="The Complete 2022 Web Development Camp" i1="ri-play-circle-fill" p1="35 Classes" i2="ri-user-fill" p2="291 Students" i3="ri-star-half-line" p3="4.7" title="Design" title1="Development" title2="%29.99" />
        <Explor_card src="https://e-pora-next.vercel.app/assets/img/course/course-thumb-04.jpg" image1="https://e-pora-next.vercel.app/assets/img/icon/course-avata-04.png" heading="The Complete 2022 Web Development Camp" i1="ri-play-circle-fill" p1="35 Classes" i2="ri-user-fill" p2="291 Students" i3="ri-star-half-line" p3="4.7" title="Design" title1="Development" title2="%29.99" />
    </div>
    </div>
  )
}

export default Explore_popular