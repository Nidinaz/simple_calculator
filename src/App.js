import React from 'react';
import './App.css'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import CalculatorApp from './components/CalculatorApp';


const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
      <CalculatorApp>

      </CalculatorApp>
      </Provider>
    </React.Fragment>
  );
};

export default App;

