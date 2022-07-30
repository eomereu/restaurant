import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillBagFill } from 'react-icons/bs'
// import { CgMenuRound, CgMenuHotdog } from 'react-icons/cg'

import { MdOutlineRestaurantMenu } from 'react-icons/md'


import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBgOfNavbar = () => {
    if (window.scrollY >= 70) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBgOfNavbar)

  return (
    <nav className={navbar ? 'app__navbar active': 'app__navbar'}>
      {/* log div */}
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>

      {/* navigation links */}
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>

      <div className='app__navbar-cart'>
        <BsFillBagFill className='app__navbar-cart_icon' fontSize={35} />
      </div>

      {/* reservation and order div */}
      <div className='app__navbar-action'>
        <a href="/" className='p__opensans'>Book Table</a>
        <div />
        <a href="#order" className='p__opensans'>Order Now</a>
        {/* <a href="#login" className='p__opensans'>Login/Register</a> */}
      </div>
      <div className='app__navbar-smallscreen'>
        <BsFillBagFill className='app__navbar-cart_icon_small' fontSize={27} />
        <GiHamburgerMenu color='#fff' fontSize={27} className='app__navbar-h_menu_cursor' onClick={() => setToggleMenu(true)}/>
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
              <li className='p__opensans'><a href="/">Book Table</a></li>
              <li className='p__opensans'><a href="#order">Order Now</a></li>
              {/* <li className='p__opensans'><a href="#login">Login/Register</a></li> */}
            </ul>
          </div>
        )}
      </div>

    </nav>
  );
};


export default Navbar;
