import React, {useState} from 'react'

export default function Weather() {

    const [lat,setLat]= useState("");
    const [lon,SetLon ] = useState("");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);

        } else {
            return <p>"Geolocation is not supported by this browser.";</p>
        }
    }
    function showPosition(pos){
        setLat(pos.coords.latitude);
        SetLon(pos.coords.Longitude);
    }

    return (
        <div>
            <button onClick={getLocation}>ClickMe</button>
            {console.log(lat)}
            {console.log(lon)}
        </div>
    )
}
