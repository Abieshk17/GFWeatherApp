import React from 'react';
import WeekInfoCardComponents from './WeekInfoCard';
import ChooseStateComponents from './ChooseState';
import HumidityComponents from './Humidity';
import LeftComponents from './Left';
const HomeComponents = ()=>{   
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                    <LeftComponents />
                    <div className='rightSide'>
                        <ChooseStateComponents />
                        <WeekInfoCardComponents /><br/>
                        <HumidityComponents />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponents;


