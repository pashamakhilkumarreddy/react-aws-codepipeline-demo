import React from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routes from './routes';

const App = () => (
  <>
    <Header />
    <main className='container'>
      <div className='columns is-mobile is-centered is-vcentered is-multiline mt-4'>
        <div className='column is-full has-text-centered'>
          <Routes />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default App;
