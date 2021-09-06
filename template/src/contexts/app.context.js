import React, {useReducer} from 'react';

import PropTypes from 'prop-types';

import {authInitialState, authReducer} from '../reducers/auth.reducer';

const AppContext = React.createContext();
const AppContextDispatch = React.createContext();

const AppProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  return (
    <AppContext.Provider
      value={{
        authState,
      }}>
      <AppContextDispatch.Provider
        value={{
          authDispatch,
        }}>
        {children}
      </AppContextDispatch.Provider>
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {AppProvider, AppContext, AppContextDispatch};
