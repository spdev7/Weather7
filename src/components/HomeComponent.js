import React from 'react'
import WeatherCard from './WeatherCard';
import TopWeatherSlider from './TopWeatherSlider';
// import Searchbar from './GetLocation';

const HomeComponent = () => {
    return (
        <div>
            {/* <Searchbar /> */}
            <TopWeatherSlider/>
            <WeatherCard/>
        </div>
    )
}

export default HomeComponent
