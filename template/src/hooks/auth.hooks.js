import {useContext} from 'react';

import {AppContext, AppContextDispatch} from '../contexts/app.context';

const AuthHooks = () => {
  const {authDispatch} = useContext(AppContextDispatch);
  const {authState} = useContext(AppContext);

  const login = () => {
    authDispatch({
      type: 'LOGIN',
      payload: {
        user: {first_name: 'Johnny', last_name: 'Lesh'},
        token: 'AIzaSyCc2ZCDA9C2M4W0uwKv_ea01Huy5sPFS5s',
      },
    });
  };

  const logout = () => {
    authDispatch({
      type: 'LOGOUT',
    });
  };

  return {
    login,
    logout,
    authState,
  };
};

export default AuthHooks;
