import React from "react";

const Earthquakefeed = ({ quake, away, color }) => {
    return (<div className={`earthquake__EarthQuake-container_news p-2 shadow-lg mb-6 rounded-md flex items-center justify-between text-center ${color}`}>
        <span className='mag text-4xl mr-2'>{quake.mag.toFixed(2)}</span>
        <div className='earthquake__EarthQuake-container_news-datiles flex flex-col justify-center'>
            <span className='place text-gray-500 px-6'>{quake.location_properties.epiCenter.name ? 'Turkey-' + quake.location_properties.epiCenter.name : 'Turkey-Syria Border'}</span>                    </div>
        <div className=' ml-2'>
            {away}
        </div>
    </div>);
}

export default Earthquakefeed;