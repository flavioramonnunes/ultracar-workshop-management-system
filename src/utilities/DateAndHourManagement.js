const valueSetting = (obj, methodName) => {
    let number = obj[methodName]();

    if (number < 10 && methodName !== 'getMonth') {
        return `0${ number }`;
    } else if (methodName !== 'getMonth') {
        return number;
    }

    number++;

    if (number < 10) {
        return `0${ number }`;
    } else {
        return number;
    }
  };

const dateAndHourManagement = () => {
    const currentDateHour = new Date(Date.now());
    
    const initialHour = valueSetting(currentDateHour,'getHours');
    const initialMinute = valueSetting(currentDateHour, 'getMinutes');
    const initialTime = `${ initialHour }:${ initialMinute }`;

    const initialDay = valueSetting(currentDateHour,'getDate');
    const initialMonth = valueSetting(currentDateHour,'getMonth');
    const initialDate = `${ initialDay }/${ initialMonth }/${ currentDateHour.getFullYear()}`;

    return {
        "id": currentDateHour,
        initialTime,
        initialDate,
    };
};

export default dateAndHourManagement;