/*let API_KEY = "6a3c1faa5b9593952822c93f1be1c342";
let apiUrl = "http://api.openweathermap.org/data/2.5/";

let fetchWeather = function(city) {
    let weeklyWeatherUrl =
        `${apiUrl}/forecast/daily?q=${city}&units=metric&cnt=7&appid=${API_KEY}`

    return fetch(weeklyWeatherUrl).then((response) => response.json());
};

export { fetchWeather }

*/

import React from 'react';


let city = 'Krakow';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            temp: 0,
            des: 0

        }
    }

    getApi(){

        const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&lang=pl&APPID=6a3c1faa5b9593952822c93f1be1c342";
        return fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    temp: responseJson.main.temp,
                    des: responseJson.main
                })

            })
    }
    componentDidMount(){
        window.addEventListener('load', this.getApi());
    }

    render() {
        let showWeather = null;

        if(this.state.temp){
            showWeather = (
                <div>
                    <h1>{this.state.temp}°C</h1>
                </div>
            )
        }

            return (
                <div>
                    <div>
                        {showWeather}
                    </div>
                </div>
            );
        }
}
export default Weather;
