import React from 'react'

const Record = () => {
  return (
    <div className='flex justify-between'>
        <div className="w-[7rem] sm:w-[10rem] lg:w-[15rem] flex flex-col gap-4 p-[1rem] text-[#fff] bg-[#3B73B5] rounded-xl">
            <p className='text-[0.5rem] md:text-[1rem]' >Ignite wallet balance</p>
            <p className=' text-[0.8rem] md:text-[1.5rem] lg:text-[2rem] font-medium'>₹ 20,500.32</p>
        </div>
        <div className=" w-[7rem] sm:w-[10rem] lg:w-[15rem] flex flex-col gap-4 p-[1rem] text-[#fff] bg-[#3CD75D] rounded-xl">
            <p className='text-[0.5rem] md:text-[1rem]' >Ignite wallet balance</p>
            <p className='text-[0.8rem] md:text-[1.5rem] lg:text-[2rem] font-medium'>₹ 20,500.32</p>
        </div>
        <div className=" w-[7rem] sm:w-[10rem] lg:w-[15rem] flex flex-col gap-4 p-[1rem] text-[#fff] bg-[#FFD94A] rounded-xl">
            <p className='text-[0.5rem] md:text-[1rem]' >Ignite wallet balance</p>
            <p className='text-[0.8rem] md:text-[1.5rem] lg:text-[2rem] font-medium'>₹ 20,500.32</p>
        </div>
    </div>
  )
}

export default Record