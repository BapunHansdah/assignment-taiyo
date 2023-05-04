import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet'

export default function App({countriesData}){
  return(
     <div
        className="border-2 border-blue-500 w-11/12  m-auto 5 auto 5"

      >
<MapContainer
          className="m-auto w-full  border-blue-700"
          bounds={[[-60, -180], [85, 180]]} zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

     {countriesData && countriesData.map((country,i) => (
    <Marker 
              position={[country.countryInfo.lat, country.countryInfo.long]}
              key={i}
    >
      <Popup>
          <div className="">
                  <h2>{country.country}</h2>
                  <p>
                    Active Cases: {country.active} <br />
                    Recovered Cases: {country.recovered} <br />
                    Deaths: {country.deaths}
                  </p>
                </div>
      </Popup>
    </Marker>
          ))}

  </MapContainer>




      </div>
    )
}