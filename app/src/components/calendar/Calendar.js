import './Calendar.css';
import Year from './components/Year';
import { useState } from 'react';


// let lifeExpectancy = 10;
// let years = Array.from(Array(80).keys());
// years = years.map((year) => {
//     return (
//         <Year key={ year } yearNo={ year } lifeExpectancy={ lifeExpectancy } />
//     );
// });

function Form({ updateLifeExpectancy }) {
    return (
        <form>
            <label htmlFor="birthDate">Please select your birthdate</label>
            <input type="date" id="birthDate"></input>
            <label htmlFor="lifeExpectancy">Please enter your life expectancy</label>
            <input type="number" id="lifeExpectancy" min="0" max="150"></input>
            <button onClick={ updateLifeExpectancy }>Update</button>
        </form>
    );
}

function Calendar() {
    const [lifeExpectancy, setLifeExpectancy] = useState(10);

    function updateLifeExpectancy(event) {
        event.preventDefault();
        setLifeExpectancy(document.getElementById("lifeExpectancy").value);
    }

    let years = Array.from(Array(80).keys());
    years = years.map((year) => {
        return (
            <Year key={ year } yearNo={ year } lifeExpectancy={ lifeExpectancy } />
        );
    });


    return (
        <>
            <h1>Memento Mori Calendar</h1>
            <Form updateLifeExpectancy={ updateLifeExpectancy } />
            <div className="calendar">
                { years }
            </div>
        </>
    );
}

export default Calendar;