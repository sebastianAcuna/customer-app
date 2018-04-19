import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({name, rut, age}) => {
    return (
        <div>
            <h2>Edicion del Cliente</h2>
            <h3>Nombre : {name} / Rut: {rut} / Edad: {age}</h3>
        </div>
    );
};

CustomerEdit.propTypes = {
    name : PropTypes.string,
    rut: PropTypes.string,
    age: PropTypes.number,
};

export default CustomerEdit;