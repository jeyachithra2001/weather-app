function Details(props) {
    return (
        <div className="details__container">
            <h2>Today's Details</h2>

            <div className="details__box">
                <div className="detail__item__flex">
                    <div>
                        <span>🌡</span>
                    </div>
                    <div>
                        <p>Feels Like</p>
                        <p>{(props.feellike-273.15).toFixed(1)}°C</p>
                    </div>
                </div>
                <div className="detail__item__flex">
                    <div>
                        <span>👁</span>
                    </div>
                    <div>
                        <p>Visiblity</p>
                        <p>{(props.vis/1000).toFixed(1)} km</p>
                    </div>
                </div>
                <div className="detail__item__flex">
                    <div>
                        <span>⏲</span>
                    </div>
                    <div>
                        <p>Pressure</p>
                        <p>{props.pressure} hPa</p>
                    </div>
                </div>
                <div className="detail__item__flex">
                    <div>
                        <span>☁︎</span>
                    </div>
                    <div>
                        <p>Clouds</p>
                        <p>{props.clouds} %</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details