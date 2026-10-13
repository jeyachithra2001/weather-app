import image1 from '../assets/image1.jpg'
import weather from '../assets/sun2.png'
function Weather(props) {

    const city = props.city
    const setCity = props.setCity

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const today = new Date()
    const dayAndDate = today.toLocaleString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric"
    })

    return (
        <div>
            <div className='bg'>
                <img src={image1} alt="image" className='bg-img' />
                <div className="overlay"></div>
            </div>
            <div className='container'>
                {/* SEARCH BOX */}
                <div className='search__flex search'>
                    <div className='search__inner__flex'>
                        <i className="fa-solid fa-location-dot"></i>
                        <input value={city} onChange={handleChange} onKeyDown={props.handleKeydown} type="text" placeholder='Enter City' />
                    </div>
                    <div>
                        <button type="button" onClick={props.handleSearch} aria-label="Search city">Search</button>
                    </div>
                </div>

                {/* CONTENT */}
                <div className='content'>
                    <p>{dayAndDate}</p>
                    <p><i className="fa-solid fa-location-dot"></i> <span>{city}</span></p>
                    <h1>{(props.deg - 273.15).toFixed(1)}°C</h1>
                    <h5>Partly {props.main}</h5>
                    <p>Feels like {(props.feellike - 273.15).toFixed(1)}°C</p>

                    {/* DETAILS BOX */}
                    <div className='black__box__flex'>
                        <div className='black__box__item'>
                            <i className="fa-solid fa-droplet"></i>
                            <p>Humidity</p>
                            <p>{props.humidity} %</p>
                        </div>
                        <div className="border"></div>
                        <div className='black__box__item'>
                            <i className="fa-solid fa-wind"></i>
                            <p>Wind</p>
                            <p>{props.wind} km/h</p>
                        </div>
                        <div className="border"></div>
                        <div className='black__box__item'>
                            <i className="fa-solid fa-globe"></i>
                            <p>Longitude</p>
                            <p>{(props.long).toFixed(2)}°</p>
                        </div>
                        <div className="border"></div>
                        <div className=' black__box__item'>
                            <i className="fa-solid fa-globe"></i>
                            <p>Latitude</p>
                            <p>{(props.lat).toFixed(2)}°</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='weather-img'>
                <img src={weather} alt="sun image" />
            </div>
        </div>
    )
}
export default Weather