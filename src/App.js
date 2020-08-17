import React from 'react';
import { Provider } from 'react-redux';
import store from "./store/store";
import './App.css';
import { LineChart } from "./components/line-chart/line-chart";

function App() {
  return (
    <Provider store={ store }>
        <div className="App">
            <LineChart />
        </div>
    </Provider>
  );
}

export default App;
