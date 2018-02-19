import React from 'react';

class Localization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            city: ''
        };
    }

    componentDidMount() {
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
    }



    render() {
        var cityLocal = this.state.city;
        const { error, isLoaded, city} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

                <h1 className={'cityName'}>{city}</h1>

            );
        }
    }
}
/*
<h1 className={'cityName'}>
                        {city}
                    </h1>
 */

export default Localization;