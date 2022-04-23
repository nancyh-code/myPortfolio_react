import React, { useState, useEffect } from 'react';
import ME from '../../assets/images/me-header.jpg';
import { BsMouse } from 'react-icons/bs';
import CTA from './CTA';
import SocialsHeader from './SocialsHeader';
import AnimatedLetters from '../Animation';
import './header.css';

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [
    ' ',
    'N',
    'a',
    'n',
    'c',
    'y',
    ' ',
    'H',
    'e',
    'r',
    'n',
    'a',
    'n',
    'd',
    'e',
    'z',
    ',',
  ];
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <header>
      <div className='container header__container'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span> <br />
            <span className={`${letterClass} _13`}>{''}I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* Nancy Hernandez,
            <br />
            software developer. */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <h2 className='text-light'>
            Frontend Developer / React / Javascript / Node
          </h2>

          <CTA />
        </div>
        <div className='visual-zone'>
          <SocialsHeader />

          <div className='me'>
            <img src={ME} alt='me' />
          </div>
          <a href='#contact' className='scroll__down'>
            <BsMouse className='scroll__down-icon' /> {''}
            <span className='scroll__down-rotate'>Scroll Down</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
