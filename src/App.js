import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import './App.css';
import { LineChart } from "./components/line-chart/line-chart";

function App() {
  return (
    <Provider store={ store }>
        <div className="App">
            <h3>BitCoin Financial Modelling</h3>
            <LineChart />
        </div>
    </Provider>
  );
}

export default App;
