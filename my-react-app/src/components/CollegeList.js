import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import CollegeListItem from './CollegeListItem';
import img1 from '../assests/img1.jpeg';
import img2 from '../assests/img2.jpeg';
import img3 from '../assests/img3.jpeg';
import img4 from '../assests/img4.jpeg';

const colleges = [
  { name: 'University A',
    img: img1,
    distance: '0.5 miles from city center', 
    roll: 'Scholarship', 
    type: 'Financial aid',
    room: 'Dormitory room',
    bed: '1x twin size bed', 
    bathroom: '1x Shared bathroom',
    hastage1: '#Scholarship', 
    hastage2: '#Top Choice', 
    review: 'Outstanding', 
    number: '2,304 reviews' ,
    rating: '9.8', fees: '$200',
    year: '4 years, 1 student', 
    option:'View Options'},

  { name: 'College B',
    img: img2, 
    distance: '1 mile from city center', 
    roll: 'Internship', 
    type: 'Financial aid',
    room: 'Shared room', 
    bed: '1x full size bed', 
    bathroom: '1x Shared bathroom',
    hastage1: '#Financial Aid', 
    hastage2: '#FinancialAid', 
    review: 'Satisfactory', 
    number: '980 reviews' ,
    rating: '7.9', 
    fees: '$180',
    year: '3 years, 1 student', 
    option:'View Options' },

  { name: 'University Haven',
    img: img3, 
    distance: '1.5 miles from city center', 
    roll: 'Dining hall access', 
    type: '',
    room: 'Deluxe suite', 
    bed: '1x queen bed', 
    bathroom: '1x private bathroom',
    hastage1: '#MustVisit', 
    hastage2: '#HiddenGem', 
    review: 'Top-rated', 
    number: '3,500 reviews' ,
    rating: '9.8', 
    fees: '$650',
    year: '4 nights, 1 visitor', 
    option:'Explore programs'},

  { name: 'College Gateway A',
    img: img4, 
    distance: '2.8 miles from city center', 
    roll: 'Student', 
    type: 'Meal plan included',
    room: 'Standard room', 
    bed: '1x twin bed', 
    bathroom: '1x Shared bathroom',
    hastage1: '#Affordable', 
    hastage2: '#FinancialAid',  
    review: 'Average rating', 
    number: '1,200 reviews' ,
    rating: '7.2', 
    fees: '$80',
    year: '2 nights, 1 guest',
    option: 'Apply now' }
];

function CollegeList() {
  return (
    <>
            <div className='flex justify-between'>
            <div>
            <div> 20 matching results for: College Name, Programs, Student Population </div>
            <div className='font-bold text-2xl mb-4'> Financial Aid Available</div>
            </div>
            <div><button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-black bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"type="button">
            Filter <FontAwesomeIcon icon={faAngleDown} /></button>
            </div>
        </div>
    <div className="space-y-4">
      {colleges.map((college, index) => (
        <CollegeListItem key={index} college={college} />
      ))}
    </div>
    </>
  );
}

export default CollegeList;