import React from 'react';
import Weather from './weather.jsx';

const currentDate = new Date();


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            temp: null,
            id: null
        };
    }
    getApi() {
        const apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&units=metric&lang=pl&appid=dbe98c6eabaf54fa682fbca51cdedf80";
        return fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    city: responseJson.name,
                    temp: responseJson.main.temp,
                    id: responseJson.weather[0].id
                })

            })
            .catch((error) => {
                console.error(error);
            });
    }

    onChange = (event) => {
        this.setState({ city: event.target.value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            city: '',
        });
    };
    icons(){
        if((this.state.id >= 200 && this.state.id < 321) || (this.state.id >= 500 && this.state.id < 531)){
            console.log(this.state.id + " 1");
            return <img src={'./images/drop.png'}/> //rain
        } else if(this.state.id >= 600 && this.state.id < 622){
            console.log(this.state.id + " 2");
            return <img src={'./images/snowflake.png'}/> //snow
        } else if((this.state.id > 800) && (this.state.id <= 804)){
            console.log(this.state.id + " 4");
            return <img src={'./images/clouds.png'}/> //clouds
        } else if(this.state.id === 800){
            console.log(this.state.id + " 5");
            return <img src={'./images/sun.png'}/> //day
        } else if((currentDate.getHours() > 6) && (currentDate.getHours() < 19)){
            console.log(this.state.id + " 6");
            return <img src={'./images/sun.png'}/> //day
        }else if((currentDate.getHours() > 19) && (currentDate.getHours() < 6)){
            console.log(this.state.id + " 3");
            return <img src={'./images/moon.png'}/> //night
        }
    }

    render() {
        let showWeather = null;
        if(this.state.temp){
            showWeather= (
                <div>
                    <h2>{this.state.city}</h2>
                    <h1 style={{fontSize:'5em'}}>{this.state.temp.toPrecision(2)}°C</h1>
                    <div>{this.icons()}</div>
                </div>
            )
        }

        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.city} onChange={this.onChange} placeholder={' Wpisz miasto...'}/>
                    <button onClick={() => { this.getApi() }} className={'button'}>Pokaż pogode</button>
                </form>
                <div>
                    {showWeather}
                </div>
            </div>

        );
    }
}

