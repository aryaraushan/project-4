import React from 'react'
import Offer_card from './card/Offer_card'

function What_we_offer() {
  return (
    <div>
        <div className=" h-screen w-screen object-cover object-cente bg-[url('https://e-pora-next.vercel.app/assets/img/bg/shape-bg-1.png')] flex  flex-col items-center justify-center">
        <h1 className='text-2xl text-[#FF6652] font-semibold' >What We Offer</h1>
        <h2 className='text-5xl font-semibold  mt-4 '>For Your Future Learning.</h2>

        
          <div className='flex w-full justify-center items-center mt-12 '>
          <div className='text-2xl font-semibold text-[#FF6652] flex  justify-center items-center gap-12'>
            <Offer_card name="What We Offer"title="Interactively provide access world class materials for unique catalysts for change my ocardinat." image="https://i.pinimg.com/564x/00/b5/02/00b50240edcbe72e9b76297f0bf54244.jpg"/>
            <Offer_card name="Expert Trainer"title="Interactively provide access world class materials for unique catalysts for change my ocardinat." image="https://i.pinimg.com/736x/04/ec/8d/04ec8de2a6d9189279f39dce2f46fffa.jpg"/>
            <Offer_card name="Get Certificate"title="Interactively provide access world class materials for unique catalysts for change my ocardinat." image="https://i.pinimg.com/564x/2e/09/c9/2e09c92e1b1001984e7eb230848973b6.jpg"/>
            <Offer_card name="Life Time Access"title="Interactively provide access world class materials for unique catalysts for change my ocardinat." image="https://i.pinimg.com/564x/7b/69/64/7b6964e9185194416b2cf7a87c73a654.jpg"/>

          </div>
          </div> 
        </div>
        </div>
        
    
  )
}

export default What_we_offer