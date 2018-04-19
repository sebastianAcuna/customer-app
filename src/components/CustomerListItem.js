import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({name, editAction, delAction, urlPath, rut}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${urlPath}${rut}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${rut}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPath}${rut}/delete`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    rut:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    editAction: PropTypes.string.isRequired, 
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerListItem;