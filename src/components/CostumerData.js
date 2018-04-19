import React from 'react';
import PropTypes from 'prop-types';

const CostumerData = ({ name, run, age}) => {
    return (
        <div>
            <div className="costumer-data">
                <h2></h2>
                <div><strong>Nombre</strong><i>{name}</i></div>
                <div><strong>RUN</strong><i>{run}</i></div>
                <div><strong>Edad</strong><i>{age}</i></div>
            </div>
        </div>
    );
};

CostumerData.propTypes = {
    name:PropTypes.string.isRequired,
    dni:PropTypes.string.isRequired,
    age:PropTypes.number,
};

export default CostumerData;