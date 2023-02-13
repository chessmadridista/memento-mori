import './Calendar.css';
import Year from './components/Year';

let years = Array.from(Array(20).keys());
years = years.map((year) => {
    return (
        <Year key={ year } yearNo={ year } />
    );
});

function Calendar() {
    return (
        <>
            <h1>Memento Mori Calendar</h1>
            { years }
        </>
    );
}

export default Calendar;