import React from 'react';
import { Provider } from 'react-redux';


//.js files import
import store from './store';

//.for navigation
import MainContainer from './navigation/MainContainer';

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
