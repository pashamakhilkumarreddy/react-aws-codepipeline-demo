import React from 'react';
// import { Helmet } from 'react-helmet-async';
import Counter from '../../components/Counter';

const Home = () => (
  <>
    {/* <Helmet>
      <title>Home | React AWS CodePipeline Demo</title>
    </Helmet> */}
    <h1 className='has-text-centered is-size-1'>Welcome to Counter Application</h1>
    <Counter />
  </>
);

export default Home;
