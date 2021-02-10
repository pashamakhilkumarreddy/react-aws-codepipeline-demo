import React, { memo } from 'react';
import './index.css';

const Footer = () => (
  <footer className='footer'>
    <div className='content has-text-centered'>
      <p>
        <strong>
          React AWS CodePipeline Demo
        </strong>
        &nbsp;by&nbsp;
        <a href='https://github.com/pashamakhilkumarreddy' target='_blank' rel='noreferrer'>Pasham Akhil Kumar Reddy</a>
      </p>
    </div>
  </footer>
);

export default memo(Footer);
