import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            temp: -100,
            des: '',
            isLoaded: false,
            city: ''
        }
    }
    componentDidMount(){
        fetch("http://ip-api.com/json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        city: result.city
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        window.addEventListener('load', this.getApi());
    }

    getApi(){
        var cityS = this.state.city;
        const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=`+ cityS +`&units=metric&lang=pl&APPID=6a3c1faa5b9593952822c93f1be1c342`;
        console.log(apiURL + " apiURL");
        return fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    temp: responseJson.main.temp,
                    des: responseJson.weather[0].main,
                })
                console.log("main = " + responseJson.weather[0].main+ "\ntemp = " +responseJson.main.temp);
            })
    }

    render() {

        let showWeather2 = (
                <div>
                    <h1>{this.state.temp}°C</h1>
                    <h2>{this.state.des}</h2>
                    <h2>{this.state.city}</h2>
                </div>
            )


            return (
                <div>
                    <div>
                        {showWeather2}
                    </div>
                </div>
            );
        }
}
module.exports= Weather;
