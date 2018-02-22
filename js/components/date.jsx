import React from 'react';

const currentDate = new Date();

    var numberDay;
    if (currentDate.getDay() == 1) {
        numberDay = 'Poniedziałek';
    } else if (currentDate.getDay() == 2) {
        numberDay = 'Wtorek';
    } else if (currentDate.getDay() == 3) {
        numberDay = 'Środa';
    } else if (currentDate.getDay() == 4) {
        numberDay = 'Czwartek';
    } else if (currentDate.getDay() == 5) {
        numberDay = 'Piątek';
    } else if (currentDate.getDay() == 6) {
        numberDay = 'Sobota';
    } else {
        numberDay = 'Niedziela';
    }



class DateConstructor extends React.Component{

    render(){
        return (
            <div className={'date'}>
                <h3>{ numberDay + ", " +currentDate.getDate() + "." + "0" +(currentDate.getMonth()+1) + "." + currentDate.getFullYear()}</h3>
            </div>

        )
    }
}

export default DateConstructor;