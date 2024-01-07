import React from 'react';
import  {UseWeatherAPPContext} from '../../Context/Context';

const HumidityComponents = () => {
    const { state: { current, city } } = UseWeatherAPPContext();
    console.log('Rendering HumidityComponents with state:', current, city);


    const uvLevel = (uvIndex) => {
        if (uvIndex <= 2) return "Low";
        if (uvIndex <= 5) return "Medium";
        if (uvIndex <= 7) return "High";
        if (uvIndex > 7) return "Very High";
    };

    return (
        <>
            {
                current ? <div className = 'humidityWrap'>
                    <div className='humidityData'>
                    <div className='title'>UV Index</div>
                    <div className='value'>{Math.round(current.uvi)} ({uvLevel(Math.round(current.uvi))}) </div>
    
                </div>

                <div className='humidityData'>
                    <div className='title'>Humidity</div>
                    <div className='value'>{current.humidity}%</div>
    
                </div>

                <div className='humidityData'>
                    <div className='title'>Wind</div>
                    <div className='value'>{Math.round(current.wind_speed)} km/hr</div>
    
                </div>

                <div className='humidityData'>
                    <div className='title'>{city.city} - {city.admin_name} - population</div>
                    <div className='value'>{parseFloat(city.population).toLocaleString('en')}</div>
    
                </div>

            </div> : ''
           
            }
        </>
        
    )
}

export default HumidityComponents;