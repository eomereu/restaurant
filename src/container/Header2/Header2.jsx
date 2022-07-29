import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header2.css';

const Header2 = () => (
  <div className='app__header_2 app__wrapper_2 section__padding' id='home_2'>
    {/* info div */}
    <div className='app__wrapper_2_info'>
      <SubHeading title='Chase the new flavour' id='header_2__subheading' />
      <h1 className='app__header_2-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}} p={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus purus nec odio convallis accumsan. Vivamus semper viverra sapien id posuere. Proin cursus justo et porttitor interdum. In pharetra tristique suscipit. Nam dapibus erat vitae diam interdum volutpat. Duis quis ultricies massa. Morbi condimentum sapien dui, a ullamcorper lorem vestibulum in. Nullam quis odio ut arcu ornare blandit eget id turpis. Donec commodo ex quis mattis viverra.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    {/* image div */}
    <div className='app__wrapper_2_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header2;