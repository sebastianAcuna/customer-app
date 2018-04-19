import React, { Component } from 'react';
import {Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import logo from './logo.svg';
import './App.css';

class App extends Component {
renderHome = () => <HomeContainer/>;
renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <CustomerContainer/>;
renderCustomerNewContainer = () => <h1>Customer New Container</h1>;



  render() {
    return (
      //exact busca la url exacta y no muestra los otros componentes 
      //switch hace lo mismo que exact pero debe envolver los componentes desde el mas especificos al menos 
      <MuiThemeProvider>
        <Router> 
          <div className="App">
          
            <Route exact path="/" component={this.renderHome} />
            <Route exact path="/customers" component={this.renderCustomerListContainer} />
            <Switch >
              <Route  path="/customers/new" component={this.renderCustomerNewContainer} />
              <Route  path="/customers/:rut" component={this.renderCustomerContainer} />
            </Switch>
          
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
