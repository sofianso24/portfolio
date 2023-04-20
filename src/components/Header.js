import React from 'react';
import Logo from '../assets/electric3.png'

const Header = () => {
  return (
    <header className=' py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className='h-16 sm:h-12 w-52 sm:w-44 ' src={Logo}></img>
          </a>
          <button className='btn btn-sm'>work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
