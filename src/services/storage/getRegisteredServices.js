const getRegisteredServices = () => {
    return JSON.parse(localStorage.getItem('registeredServices'));
};

export default getRegisteredServices;