import styles from './Calendar.module.css';
import Year from './components/Year';

function Calendar() {
    let yearsTillToday = 25;
    let years = Array.from(Array(80).keys());
    years = years.map((year) => {
        return (
            <Year key={ year } yearNo={ year } yearsTillToday={ yearsTillToday } />
        );
    });

    return (
        <div className={ styles.calendar }>
            { years }
        </div>
    );
}

export default Calendar;