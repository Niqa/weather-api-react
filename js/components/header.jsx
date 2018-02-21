import React from 'react';
import Localization from "./localization.jsx";
import Weather from "./weather.jsx";
import Form from "./form.jsx";
import DateConstructor from "./date.jsx";
import Quotes from "./quotes.jsx";
import fetchLocal from "./localization.jsx";



class Header extends React.Component{
    render(){
        return (
            <div className={'container'}>
                <div className={'inContainer'}>
                    <DateConstructor/>
                    <Form/>
                </div>
            </div>

        )
    }
}

export default Header;