import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    {/* info div */}
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' id='header__subheading' />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}} p={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus purus nec odio convallis accumsan. Vivamus semper viverra sapien id posuere. Proin cursus justo et porttitor interdum. In pharetra tristique suscipit. Nam dapibus erat vitae diam interdum volutpat. Duis quis ultricies massa. Morbi condimentum sapien dui, a ullamcorper lorem vestibulum in. Nullam quis odio ut arcu ornare blandit eget id turpis. Donec commodo ex quis mattis viverra.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    {/* image div */}
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
