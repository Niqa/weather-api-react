/*
let fetchLocal = function() {
    let localUrl ="http://ip-api.com/json";

    return fetch(localUrl).then((response) => response.json());
};
console.log(fetchLocal.response);

export default { fetchLocal };

*/
import React from 'react';



class Localization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            lat: 0,
            lon: 0,
            city: null
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
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, city} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <h1>
                    {city}
                </h1>
            );
        }
    }
}
export default Localization;