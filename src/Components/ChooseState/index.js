import React, { useEffect } from 'react';
import axios from 'axios';
import cities from '../../Data/in.json';
import { UseWeatherAPPContext } from '../../Context/Context';
const ChooseStateComponents =()=>{
   
    const{state:{city}, dispatch} = UseWeatherAPPContext();
    console.log('UseWeatherAPPContext', UseWeatherAPPContext(), city);

    const handleChange = (e)=>{
        const selectedCity = cities.filter((city)=>{
           return city.city === e.target.value
        })[0]
       dispatch({
        type: 'SET_CITY',
        payload:selectedCity
       })
    }

    //API Call
    const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'hourly,minutely';
    const URL =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`

    const fetchData = () => {
        axios.get(URL)
            .then((response) => {
                const _daily = response.data.daily;
                dispatch({
                    type: 'SET_DAILY',
                    payload: _daily
                });
                // Additional logic if needed
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                // Handle the error, e.g., set an error state, show a message, etc.
            });
    };
    
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city]); // Ensure city is a dependency if it's used inside fetchData or handle it appropriately

    return(
        <>
            <div className='stateWrap'>
                <select className='stateMenu' defaultValue={city} onChange={handleChange}>
                    {
                        cities && cities.length > 0 && cities.map((city)=>{
                            return(
                                <option key={`${city.population} ${city.lat}`} value={city.city}>
                                    {city.city} - {city.admin_name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </>
    )
}
export default ChooseStateComponents;