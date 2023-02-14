import './Year.css';
import Week from './Week';

function Year({ yearNo, yearsTillToday }) {
    let year = Array.from(Array(52).keys());
    year = year.map((week) => {
        return (
            <Week key={ week } yearNo={ yearNo } yearsTillToday={ yearsTillToday } />
        );
    });

    return (
        <div className="year">
            <span className="year-no">{ String(yearNo).padStart(2, '0') }</span>{ year }
        </div>
    );
}

export default Year;