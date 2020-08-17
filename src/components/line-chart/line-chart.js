import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Line } from 'react-chartjs-2';
import classes from './line-chart.module.css';
import Loading from "../loading/loading";
import { fetchBitcoinDataAction } from "../../store/actions/bitcoinActions";

export const LineChart = () => {

    // store data
    const loading = useSelector(store => store.bitcoin.loading);

    const [number, setNumber] = useState(15);
    const dispatch = useDispatch();

    const data = {
        labels: ["11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
        datasets: [
            {
                label: "Bit coin price",
                data: [617594, 181045, 153060, 106519, 105162, 95072],
                backgroundColor: "rgba(238, 175, 0, 0.4)",
                borderColor: "rgba(238, 175, 0, 0.5)",
                pointBorderColor: "rgba(238, 175, 0, 0.7)"
            }
        ]
    };

    const fetchData = time => dispatch(fetchBitcoinDataAction(time, number));

    if(loading) return (<Loading />);

    return (
       <>
           <div className={`${classes.timeButtons}`}>
               <button onClick={ () => fetchData(1) }>1 minute</button>
               <button onClick={ () => fetchData(5) }>5 minutes</button>
               <button onClick={ () => fetchData(10) }>10 minutes</button>
               <input value={ number } onChange={ event => setNumber(Number(event.target.value)) } className={`${classes.input}`} />
           </div>
           <div className={`${classes.lineChart}`}>
               <Line data={ data } />
           </div>
       </>
    );

};

