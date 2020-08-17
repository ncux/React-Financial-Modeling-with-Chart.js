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
    // for the chat
    const [dataLabels, setDataLabels] = useState([]);
    const [dataDatasetsData, setDataDatasetsData] = useState([]);
    const dispatch = useDispatch();

    const data = {
        labels: dataLabels,
        datasets: [
            {
                label: "Bit coin price",
                data: dataDatasetsData,
                backgroundColor: "rgba(238, 175, 0, 0.4)",
                borderColor: "rgba(238, 175, 0, 0.5)",
                pointBorderColor: "rgba(238, 175, 0, 0.7)"
            }
        ]
    };

    const fetchData = time => dispatch(fetchBitcoinDataAction(time, number));

    if(loading || !data.length) return (<Loading />);

    return (
       <>
           <div className={`${classes.timeButtons}`}>
               <button onClick={ () => fetchData(1) }>1 minute</button>
               <button onClick={ () => fetchData(5) }>5 minutes</button>
               <button onClick={ () => fetchData(15) }>15 minutes</button>
               <input value={ number } onChange={ event => setNumber(Number(event.target.value)) } className={`${classes.input}`} />
           </div>
           <div className={`${classes.lineChart}`}>
               <Line data={ data } />
           </div>
       </>
    );

};

