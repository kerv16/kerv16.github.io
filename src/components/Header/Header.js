import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className='header'>
      <Navbar /> {/* Render the Navbar component. */} 
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <SearchForm /> {/*Render the SearchForm component. */}
        <h1 className='text-white header-title ls-2'>Craving of Something?</h1>
      </div>
    </header>
  )
}

export default Header;
