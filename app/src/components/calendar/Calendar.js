import './Calendar.css';
import Year from './components/Year';
// import { useState } from 'react';

function Calendar() {
    let yearsTillToday = 25;
    let years = Array.from(Array(80).keys());
    years = years.map((year) => {
        return (
            <Year key={ year } yearNo={ year } yearsTillToday={ yearsTillToday } />
        );
    });

    return (
        <div className="calendar">
            { years }
        </div>
    );
}

export default Calendar;