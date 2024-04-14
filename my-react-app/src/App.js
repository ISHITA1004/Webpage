import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import FilterOptions from './components/FilterOptions';
 import CollegeList from './components/CollegeList';
 import CollegeListItem from './components/CollegeListItem'
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import Footer from './components/footer'
function App() {
  return (<Router>
    <div>
      <div>
      {/* <div className="main-content"> */}
        <Navbar/>
        <hr className='border-black h-2' />
        <div className='flex space-x-10'>
        <Sidebar/>
        <div className='my-20'>
        <CollegeList/>
        <Footer/>
        </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;