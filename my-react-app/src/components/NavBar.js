// import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation


const Navbar = () => {
//   return (
//     <nav className="navbar flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
//         <a href="/" className="flex items-center gap-1">
//              <p className="text-[26px] font-extrabold text-white max-sm:hidden">
//           YOOM
//         </p>
//         </a> 
//         <div className="flex-between gap-5">
        
//        </div>
       
//     </nav>
//   );
return (
    <nav className="bg-white fixed z-50 w-full px-6 py-4 lg:px-10 flex justify-between  ">
      <div className="flex items-center gap-1">
        <Link to="/" className="text-black mr-10">
        <p className="text-[26px] font-extrabold text-black max-sm:hidden">
          College
        </p>
        </Link>
        <Link to="/universities" className="text-black mr-4">Universities</Link>
        <Link to="/campuses" className="text-black mr-4">Campuses</Link>
        <Link to="/toppicks" className="text-black mr-4">Top Picks</Link>
       
      </div>
      <div className="flex gap-5">
      <button><Link to="/explore" className="text-black bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Explore</Link> </button>
      <button><Link to="/sign-in" className="text-black bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">Sign In</Link> </button>
      </div>
     
    </nav>
  );
}

export default Navbar;
