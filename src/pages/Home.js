import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
          <div className='link'>
            <Link to="/service/new">Cadastrar um novo serviço</Link>
          </div>
          <div className='link'>
            <Link to="/services">Ver serviços cadastrados</Link>
          </div>
        <Footer />
      </>
    );
  }
}

export default Home;