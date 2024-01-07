
import React, { useReducer, useContext } from 'react';

import {WeatherReducer} from './Reducer';

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WeatherReducer, {
        city:  {
            "city": "Shimla", 
            "lat": "31.1033", 
            "lng": "77.1722", 
            "country": "India", 
            "iso2": "IN", 
            "admin_name": "Himachal Pradesh", 
            "capital": "admin", 
            "population": "206575", 
            "population_proper": "206575"
          }, 
        current: '',
        daily: ''
    });

    return (
        <WeatherAPPContext.Provider value={{ state, dispatch }}>
            {children || null}
        </WeatherAPPContext.Provider>
    );
};

export default WeatherAPPProvider;

export const UseWeatherAPPContext = () => {
    return useContext(WeatherAPPContext);
}