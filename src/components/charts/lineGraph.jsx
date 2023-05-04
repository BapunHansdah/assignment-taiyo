import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineGraph = ({chartData}) => {


  // return null

  return (

    <div>
             
        {
          chartData.datasets ?
            <Line data={chartData}   maintainAspectRatio = {false} /> : <h1 className="">Loading...</h1>
        }
    </div>
  );
};

export default LineGraph;
