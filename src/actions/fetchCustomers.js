import { FETCH_CUSTOMERS } from './../constants';
import { createAction } from 'redux-actions';

const customers= [
    {
        "rut": "18.805.186-3",
        "name": "Pedro Pablo",
        "age": 24
    },
    {
        "rut": "12.109.544-0",
        "name": "Juan Perez",
        "age": 45
    },
    {
        "rut": "18.804.066-7",
        "name": "Pancha Perez",
        "age": 23
    },
];

export const fetchCustomers = createAction( FETCH_CUSTOMERS, () => customers);