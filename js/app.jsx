import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import Media from 'react-media';
import Header from './components/header.jsx';

document.addEventListener('DOMContentLoaded', function(){


    class App extends React.Component{
        render(){
            return (
                <div>
                    <h1>Weather App</h1>
                    <Header/>
                </div>

            )
        }
    }


    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});

