import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap, faUsers, faCalendarCheck,faArrowLeftLong , faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-router-dom';

function Sidebar() {
  return (
    <>
    <section className=" flex  w-fit flex-col bg-gray-300 p-6 pt-28 text-white space-y-10 h-[1400px]">
    <div className="flex flex-col gap-6">
    <FontAwesomeIcon icon={faArrowLeftLong} className='ml-2 h-5 w-5 text-slate-600' />
     <h3 className='text-black font-bold'>Search Results</h3>
     <form action="">
      <div>
      <h4 className='text-black'>College Name</h4>
      <div className="flex border-1 border-b border-gray-300 py-2">
      <FontAwesomeIcon icon={faMap} className="text-gray-400 mr-1 " />
      <input className="appearance border-1 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline" type="text" placeholder="Enter college name" />
      </div>
      </div>
      <div>
      <h4 className='text-black'>Application deadline</h4>
      <div className="flex border-1 border-b border-gray-300 py-2">
      <FontAwesomeIcon icon={faCalendarCheck} className="text-gray-400 mr-1" />
      <input className="appearance border-1 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline" type="text" placeholder="Select date" />
      </div>
      </div>
      <div>
      <h4 className='text-black'>Programs offered</h4>
      <div className="flex border-1 border-b border-gray-300 py-2">
      <FontAwesomeIcon icon={faGraduationCap}  className="text-gray-400 mr-1" />
      <input className="appearance border-1 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline" type="text" placeholder="Enter program name" />
      </div>
      </div>
      <div>
      <h4 className='text-black'>Student population</h4>
      <div className="flex border-1 border-b border-gray-300 py-2">
      <FontAwesomeIcon icon={faUsers} className="text-gray-400" />
      <input className="appearance border-1 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline" type="text" placeholder="Enter number of students" />
      </div>
      </div>
      <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold w-60 py-2 mt-3 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      Find Colleges
     </button>
     </form>
    </div>
    <hr className='border-white'/>
    <div >
    <div className='text-black mb-5'>
      <h2 className='font-bold text-black'>Explore More Option</h2>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />Student-friendly
      </div>
      <div className='font-bold mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />Campus tour
      </div>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />Virtual campus tour
      </div>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />Dormitory options
      </div>
     </div>
     <div className='text-black mb-5 '>
      <h2 className='font-bold text-black'>Tuition Fees</h2>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />Under $10,000
      </div>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />$10,000 to $20,000
      </div>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />$20,000 to $30,000
      </div>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />Over 1,000 reviews
      </div>
     </div>
     <div className='text-black mb-5 '>
      <h2 className='font-bold text-black'>Student reviews</h2>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />All ratings
      </div>
      <div className='mb-1' >
      <input className='text-black mr-2 h-15' type="checkbox" />Outstanding
      </div>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />Satisfactory
      </div>
      <div className='mb-1'>
      <input className='text-black mr-2 h-15' type="checkbox" />Acceptable
      </div>
     </div>
     </div>
     <div>
      <div className='text-black font-bold'>Academic level</div>
      <div className='flex space-x-3'>
        <div className='text-black border-black border-2'>Junior</div>
        <div className='text-black border-black border-2'>Senior</div>
        <div className='text-black border-black border-2'>radat</div>
      </div>
     </div>
  </section>
  

 
  </>
);
  
}

export default Sidebar;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faCalendar, faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
// // import { faCalender } from '@fortawesome/free-solid-svg-icons';
// // import { fabook } from '@fortawesome/free-solid-svg-icons';
// // import { faUser } from '@fortawesome/free-solid-svg-icons';
// const CollegeSearch = () => {
//   return (
//     <div className="max-w-sm mx-auto p-4">
//       <div className="flex flex-col space-y-4">
//         <div className="flex border-b border-gray-300 py-2">
//           <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
//           <input
//             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="text"
//             placeholder="Enter college name"
//           />
//         </div>
//         <div className="flex border-b border-gray-300 py-2">
//           <FontAwesomeIcon icon={faCalendar} className="text-gray-400" />
//           <input
//             className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
//             type="date"
//           />
//         </div>
//         <div className="flex border-b border-gray-300 py-2">
//           <FontAwesomeIcon icon={faBook} className="text-gray-400" />
//           <input
//             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="text"
//             placeholder="Enter program name"
//           />
//         </div>
//         <div className="flex border-b border-gray-300 py-2">
//           <FontAwesomeIcon icon={faUsers} className="text-gray-400" />
//           <input
//             className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="number"
//             placeholder="Enter number of students"
//           />
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//           Find Colleges
//         </button>
//       </div>
//     </div>
//   );
// };


// export default CollegeSearch;
