import axios from "axios";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import L from 'leaflet';
import markerIcon from '../../assets/icons/cross.svg';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet'
import CovidMap from './covidMap'
import LineGraph from './lineGraph'
import 'leaflet/dist/leaflet.css'

const Dashboard = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    axios(
      "https://disease.sh/v3/covid-19/countries"
    )
      .then((res) => {
        const data = res.data
        setCountriesData(data);
      })


  }, []);

  useEffect(() => {
    axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    ).then((res) => {

      const data = res.data

      const newChartData = {
        labels: Object.keys(data.cases),
        datasets: [
          {
            label: "Cases",
            data: Object.values(data.cases),
            borderWidth: .1
          },
        ],
         options: {
           responsive:true,
           maintainAspectRatio : false,
            borderWidth:1

        }
      };

      setChartData(newChartData);
    })


    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );

  }, []);

  return (
    <div className="grid gap-10" >
      <h1 className="text-4xl font-bold mb-4">Line graph</h1>
      <LineGraph chartData={chartData} />
      <h1 className="text-4xl font-bold mb-4">World Map</h1>
      <CovidMap countriesData={countriesData} />
    </div>
  );
};

export default Dashboard;
