import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    {/* upper part: subheading, heading */}
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu that fits your palate'/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    {/* lower part: left column, image, right column */}
    <div className='app__specialMenu-menu'>
      {/* image div of wine and beer pictue | to be shown on mobile only*/}
      <div className='app__specialMenu-menu_img' id='wine-beer-img-div'>
        <img src={images.winebeer} alt="wine beer img" />
      </div>
      {/* left colum */}
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
        </div>
      </div>
      {/* image div */}
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu img" />
      </div>
      {/* right colum */}
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    {/* button part */}
    <div style={{marginTop: '1.1rem'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
