import React from 'react';
import { Link } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';

const PageNotFound = () => (
  <>
    {/* <Helmet>
      <title>Page Not Found | React AWS CodePipeline Demo</title>
    </Helmet> */}
    <h1 className='has-text-centered is-size-1'>Page Not Found</h1>
    <Link to='/home' className='button is-link mt-6'>Go to Home</Link>
  </>
);

export default PageNotFound;
