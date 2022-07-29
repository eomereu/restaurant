import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className='app__menuItem'>

    {/* first row: name, dash, price */}
    <div className='app__menuItem-head'>
      {/* name */}
      <div className='app__menuItem-name'>
        <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      </div>
      {/* dash */}
      <div className='app__menuItem-dash'/>
      {/* price */}
      <div className='app__menuItem-price'>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    {/* second row: tags */}
    <div className='app__menuItem-sub'>
      <p className='p__opensans' style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
