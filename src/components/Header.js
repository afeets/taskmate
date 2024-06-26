import React from 'react';
import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='logo' />
        <span>Taskmate</span>
      </div>
      <div className='themeSelector'>
        <span className='light activeTheme'></span>
        <span className='medium'></span>
        <span className='dark'></span>
        <span className='gOne'></span>
        <span className='gTwo'></span>
        <span className='gThree'></span>
      </div>
    </header>
  );
}
