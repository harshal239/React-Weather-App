import React from 'react'


function CityComponent({fetchWeather,updateCity}) {
    return (
        <div className="citycomponent">
            <img src="/icons/perfect-day.svg" alt="clouds" className="clouds_c" />
            <p>Find the weather of your city</p>

            <form onSubmit={fetchWeather}>
                <input
                 onChange={(e)=>updateCity(e.target.value)}
                 type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default CityComponent
