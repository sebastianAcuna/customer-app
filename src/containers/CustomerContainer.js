import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AppFrame from './../components/AppFrame';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { fetchCustomers } from './../actions/fetchCustomers';


class CustomerContainer extends Component {

    componentDidMount(){
        this.props.fetchCustomers();   
    }

    handleAddNew = () =>{
        this.props.history.push('/customers/new');
    }

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath={'customers/'}/>
            <CustomersActions>
                <button onClick={this.handleAddNew} > Nuevo Cliente </button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div>
                <AppFrame 
                    header={'Listado de Clientes'}
                    body={this.renderBody(this.props.customers)} >
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers:PropTypes.array.isRequired,
};


CustomerContainer.defaultProps = {
     customers : [ ]
};



export default withRouter(connect(null, {fetchCustomers})(CustomerContainer));