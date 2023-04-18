import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import getClientAndVehicle from '../services/database/queries/getClientAndVehicle';
import getEmployeeList from '../services/database/queries/getEmployeeList';
import getPieceList from '../services/database/queries/getPieceList';
import dateAndHourManagement from '../utilities/DateAndHourManagement';
import setRegisteredServices from '../services/storage/setRegisteredServices';
import getEmployeeById from '../services/database/queries/getEmployeeById';
import getPieceById from '../services/database/queries/getPieceById';

class ServiceNew extends React.Component {
  state = {
    isVisibleQRCodeReadingButton: true,
    isLoading: false,
    clientAndVehicleId: 0,
    clientName: '',
    clientCellularTelephone: 0,
    vehicleLicensePlate: '',
    vehicleModel: '',
    vehicleFabricationYear: 0,
    employeeId: 1,
    employeeName: 'Joseval Brasil',
    pieceId: 1,
    pieceName: 'pneu R$ 300'
  }

  onClickQRCodeReadingButton = () => {
    this.setState({
      isLoading: true,
    }, async() => {
      const data = getClientAndVehicle();
      this.setState({
        clientAndVehicleId: data.id,
        clientName: data.Client.name,
        clientCellularTelephone: data.Client.cellularTelephone,
        vehicleLicensePlate: data.Vehicle.licensePlate,
        vehicleModel: data.Vehicle.model,
        vehicleFabricationYear: data.Vehicle.fabricationYear,
        isVisibleQRCodeReadingButton: false,
        isLoading: false
      });
    });
  };

  onClickServiceRegisterButton = () => {
    const { clientAndVehicleId, clientName, vehicleModel, employeeId, employeeName, pieceId, pieceName } = this.state;
    const { history } = this.props;

    this.setState({
      isLoading: true,
    }, async() => {
      
      const obj = dateAndHourManagement();

      const newService = {
        "id": obj.id,
        clientAndVehicleId,
        clientName,
        vehicleModel,
        employeeId,
        employeeName,
        pieceId,       
        pieceName,
        "initialTime": obj.initialTime,
        "initialDate": obj.initialDate,
        "finalTime": '',
        "finalDate": '',
        "isFinished": false
      };

      setRegisteredServices(newService);     
      
      this.setState({ isLoading: false });

      history.push('/');
    });
  };

  showForm = () => {
    const { employeeId, pieceId } = this.state;
    return(
      <form>
        <fieldset className='fieldset'>
          <legend>Informações lidas do QRCode</legend>
          <br/>
          <label htmlFor="clientNameInput" className='fieldset-item'>
            Cliente:
            <input
              name="clientNameInput"
              value={ this.state.clientName }
              disabled={ true }
            />
          </label>
          <label htmlFor="clientCellularTelephoneInput" className='fieldset-item'>
            Celular:
            <input
              name="clientCellularTelephoneInput"
              value={ this.state.clientCellularTelephone }
              disabled={ true }
            />
          </label>
          <label htmlFor="vehicleLicensePlateInput" className='fieldset-item'>
            Placa:
            <input
              name="vehicleLicensePlateInput"
              value={ this.state.vehicleLicensePlate }
              disabled={ true }
            />
          </label>
          <label htmlFor="vehicleModelInput" className='fieldset-item'>
            Modelo:
            <input
              name="vehicleModelInput"
              value={ this.state.vehicleModel }
              disabled={ true }
            />
          </label>
          <br/><br/>
          <label htmlFor="vehicleFabricationYearInput" className='fieldset-item'>
            Ano de Fabricação:
            <input
              name="vehicleFabricationYearInput"
              value={ this.state.vehicleFabricationYear }
              disabled={ true }
            />
          </label>
        </fieldset>
        <label htmlFor="employeeId" className='employee'>
            Funcionário:
            <select
              name="employeeId"
              value={ employeeId }
              onChange={ this.onChangeEmployeeSelect }
            >
              { this.showSelectOptions(getEmployeeList) }
            </select>
        </label>
        <label htmlFor="pieceId" className='piece'>
            Peça:
            <select
              name="pieceId"
              value={ pieceId }
              onChange={ this.onChangePieceSelect }
            >
              { this.showSelectOptions(getPieceList) }
            </select>
        </label>
        <div className='serviceRegisterButton'>
          <button
          className='serviceRegisterButtonName'
            type="button"
            onClick={ this.onClickServiceRegisterButton }
          >
            Cadastrar
          </button>
        </div>
      </form>
    );
  };

  showQRCodeReadingButton = () => {
    return(
      <>
        <div className='QRCodeSquare'>Posicione a câmera na direção do QRCode</div>
        <button
          className='QRCodeReadingButton'
          type="button"
          onClick={ this.onClickQRCodeReadingButton }
          >
          Ler QRCode
        </button>
      </>
    );
  };

  onChangeEmployeeSelect = ({ target }) => {
    const { value } = target;
    const employeeId = Number(value);

    this.setState({
      employeeId,
      employeeName: getEmployeeById(employeeId).name
    });
  };

  onChangePieceSelect = ({ target }) => {
    const { value } = target;
    const pieceId = Number(value);

    this.setState({
      pieceId,
      pieceName: getPieceById(pieceId).name
    });
  };

  onChangeHTMLElement = ({ target }) => {
    const { name } = target;
    const { value } = target;

    this.setState({
      [name]: value,
    });
  };

  showSelectOptions = (functionName) => {
    const list = functionName();

    return list
      .map((listItem, index) => (
        <option key={ index } value={ listItem.id }>
          { listItem.name }
        </option>));
  };

  render() {
    const { isVisibleQRCodeReadingButton } = this.state;
    return (
      <>
        <Header />
        { isVisibleQRCodeReadingButton ? this.showQRCodeReadingButton() : this.showForm() }
        <Footer />
      </>
    );
  }
}

export default ServiceNew;