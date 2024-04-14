import React from 'react';


function CollegeListItem({ college }) {
  return (
    <div>

      <div className='h-[300px] w-[1150px] bg-gray-300 py-5 flex justify-between'>
    <div className='flex space-x-5'>
        <div className='flex items-center ml-5'>
            <img src={college.img} alt="" className='h-[250px] w-[250px]'/>
        </div>

        <div>
          <div className='font-bold'>{college.name}</div>
          <div className='text-base'>{college.distance}</div>
          <div className='flex space-x-4 text-base'>
            <div>{college.roll}</div>
            <div>{college.type}</div>
          </div>
           <div className='mt-8 pt-6 text-base'>{college.room}</div>
           <div className='text-base'>{college.bed}</div>
           <div className='text-base'>{college.bathroom}</div>
           <div className='flex space-x-4 text-base mt-3 outline-style: solid;'>
            <div className='border-black border-2 p-2'>{college.hastage1}</div>
            <div className='border-black border-2 p-2'>{college.hastage2}</div>
           </div>
        </div>
    </div>

    <div className='space-y-28 relative mr-10'>
        <div className='flex space-x-6'>
            <div className=''>
                <div className='text-base'>{college.review}</div>
                <div className='text-base'>{college.number}</div>
            </div>
            <div className='bg-blue-800 w-16 h-8 flex items-center justify-center text-white'>{college.rating}</div>
        </div>
        <div className='space-y-2'>
        <div className='text-right'>{college.fees}</div>
        <div className='text-right'>{college.year}</div>
        <div className='bg-blue-800 font-bold rounded-md w-40 text-white absolute right-0 p-2 text-center' ><button>{college.option}</button></div>
        </div>
    </div>

      </div>
    </div>
  );
}

export default CollegeListItem;