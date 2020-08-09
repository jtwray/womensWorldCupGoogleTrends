import React, { useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import sunWithFace from '@iconify/icons-emojione/sun-with-face';
import fullMoonFace from '@iconify/icons-emojione-monotone/full-moon-face';
import {useDarkMode} from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (


    
<nav class="navbar">
    <div class="header--stackedTitle">
      <h1>the Women's World Cup</h1>
      <code>2019</code>
      <h2>--most Interesting players--</h2>
    </div>
    <div className="dark-mode__toggle">
        <div 
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
       />
    </div>
</nav>
    
    );
};

export default Navbar;
