import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
// import { CgMenuRound, CgMenuHotdog } from 'react-icons/cg'
import { MdOutlineRestaurantMenu } from 'react-icons/md'


import images from '../../constants/images'

import './Navbar2.css';

const Navbar2 = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar_2'>
      <div className='app__navbar_2-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar_2-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar_2-login'>
        <a href="/" className='p__opensans'>Book Table</a>
        <div />
        <a href="#login" className='p__opensans'>Login/Register</a>
      </div>
      <div className='app__navbar_2-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} className='app__navbar_2-h_menu_cursor' onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar_2-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar_2-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
              <li className='p__opensans'><a href="/">Book Table</a></li>
              <li className='p__opensans'><a href="#login">Login/Register</a></li>
            </ul>
          </div>
        )}
      </div>

    </nav>
  );
};


export default Navbar2;