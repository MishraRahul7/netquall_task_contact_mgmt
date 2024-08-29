import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { AgCharts } from 'ag-charts-react';
import axios from 'axios';

const LineChart = () => {

    useEffect(()=>{
       const data = axios("https://disease.sh/v3/covid-19/all",{method:"get"})
    },[])

  return (
    <div>LineChart</div>
  )
}

export default LineChart