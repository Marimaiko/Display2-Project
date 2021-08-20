import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { BanksContext } from './contexts/BanksContext';
import { BankList } from './components/BankList';
import { MainPage } from './components/MainPage';
import { BankInfoPage } from './components/BankInfoPage';
import { api } from './services/api';

import './style/GlobalStyle.scss';
import { isAuthenticated } from './auth';

function App() {
  const [ banksData, setBanksData ] = useState([])

  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: {from: props.location}}}/>
        )
      }
    />
  )

  useEffect (() => {
    api.get('banks/v1')
    .then((response) => {
      setBanksData(response.data)
    })
    .catch(() => {
      console.log('Error')
    })
  }, [])

  return (
    <BanksContext.Provider value={banksData}>
      <BrowserRouter>
        <Switch>
          <Route 
            exact path='/' 
            component={MainPage}
          />
          <PrivateRoute 
            path='/banks' 
            component={BankList}
          />
          <PrivateRoute 
            path='/bank-info' 
            component={BankInfoPage}
          />
        </Switch>
      </BrowserRouter>
    </BanksContext.Provider>
  );
}

export default App;
