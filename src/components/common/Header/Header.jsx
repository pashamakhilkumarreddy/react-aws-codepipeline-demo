import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import './index.css';

const Header = () => {
  const [ active, setActive ] = useState(false);
  return (
    <header>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img src='' alt='Home' />
          </Link>
          <button
            type='button'
            tabIndex={0}
            onClick={() => setActive(!active)}
            className={clsx('navbar-burger', active ? 'is-active' : '')}
            aria-label='menu' aria-expanded='false' data-target='main-navbar'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>
        <div id='main-navbar' className={clsx('navbar-menu', active ? 'is-active' : '')}>
          <div className='navbar-start'>
            <Link to='/' className='navbar-item'>Home</Link>
          </div>
          <div className='navbar-end' />
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);
