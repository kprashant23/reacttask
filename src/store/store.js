import {createStore} from 'redux';
import employeeReducer from '../reducers/EmployeeReducer'

const store = createStore(employeeReducer);

export default store;