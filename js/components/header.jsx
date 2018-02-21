import React from 'react';
import Weather from "./weather.jsx";
import Form from "./form.jsx";
import DateConstructor from "./date.jsx";


class Header extends React.Component{
    render(){
        return (
            <div className={'container'}>
                <div className={'inContainer'}>
                    <DateConstructor/>
                    <Form/>
                    <Weather/>
                </div>
            </div>

        )
    }
}

export default Header;