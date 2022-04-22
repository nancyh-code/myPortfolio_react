import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/nancy-hernandez-developer/'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/nancyh-code' target='_blank'>
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
