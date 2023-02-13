import './Calendar.css';
import Year from './components/Year';

let years = Array.from(Array(80).keys());
years = years.map((year) => {
    return (
        <Year key={ year } yearNo={ year } />
    );
});

function Form() {
    return (
        <form>
            <label htmlFor="birthDate">Please select your birthdate</label>
            <input type="date"></input>
            <label htmlFor="lifeExpectancy">Please enter your life expectancy</label>
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
            <div className="calendar">
                { years }
            </div>
        </>
    );
}

export default Calendar;