import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class PageNotFound extends React.Component {
  render() {
    return (
        <>
            <Header />
            <div className='pageNotFound'>Página não encontrada!</div>
            <Footer />
        </>
    );
  }
}

export default PageNotFound;