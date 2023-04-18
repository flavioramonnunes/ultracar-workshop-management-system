import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import getRegisteredServices from '../services/storage/getRegisteredServices'

class Services extends React.Component {
  showList = () => {
    const registeredServicesList = getRegisteredServices();

    return registeredServicesList.map((service) => (
      <tr key={ service.id }>
        <td>{`${service.clientName} / ${service.vehicleModel}`}</td>
        <td>{service.employeeName}</td>
        <td>{service.pieceName}</td>
        <td>{service.initialDate}</td>
        <td>{service.initialTime}</td>
        <td>{service.finalDate !== '' ? service.finalDate : '-'  }</td>
        <td>{service.finalTime !== '' ? service.finalTime : '-'  }</td>
        <td>{service.isFinished ? 'Sim': 'Não'}</td>
        <td>
          <button
            type="button"
            disabled={ true }
          >
            Finalizar
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    const registeredServicesList = getRegisteredServices();
    return (
      <>
        <Header />
        <p className='registered-services-screen-title'>Lista de Serviços Cadastrados</p>
        <table className='registered-services-table'>
          <thead>
            <tr>
              <th>Cliente / Veículo</th>
              <th>Funcionario</th>
              <th>Peça</th>
              <th>Data Inicial</th>
              <th>Hora Inicial</th>
              <th>Data Final</th>
              <th>Hora Final</th>
              <th>Finalizado</th>
              <th>Finalizar</th>
            </tr>
          </thead>
          <tbody>
            { registeredServicesList ? this.showList() : 'Ainda não há serviço cadastrado'}
          </tbody>
        </table>
        <Footer />
      </>
    );
  }
}

export default Services;