import getEmployeeList from "./getEmployeeList";

const getEmployeeById = (id) => {
    const list = getEmployeeList();
    return list.find((employee) => employee.id === id);
};

export default getEmployeeById;