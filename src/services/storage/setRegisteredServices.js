import getRegisteredServices from "./getRegisteredServices";

const setRegisteredServices = (newService) => {
    let registeredServices = getRegisteredServices();

    if (!registeredServices) {
      localStorage.setItem('registeredServices', JSON.stringify([newService]));
    } else {
      registeredServices.push(newService);
      localStorage.setItem('registeredServices', JSON.stringify(registeredServices));
    }
};

export default setRegisteredServices;