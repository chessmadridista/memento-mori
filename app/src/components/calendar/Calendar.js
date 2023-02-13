import './Calendar.css';
import Year from './components/Year';

let years = Array.from(Array(20).keys());
years = years.map((year) => {
    return (
        <Year key={ year } yearNo={ year } />
    );
});

function Form() {
    return (
        <form>
            <label for="birthDate">Please select your birthdate</label>
            <input type="date"></input>
            <label for="lifeExpectancy">Please enter your life expectancy</label>
            <input type="number" min="0" max="150"></input>
            <button>Update</button>
        </form>
    );
}

function Calendar() {
    return (
        <>
            <h1>Memento Mori Calendar</h1>
            <Form />
            { years }
        </>
    );
}

export default Calendar;