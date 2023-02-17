import './Year.css';
import Week from './Week';

function Year({ yearNo, yearsTillToday }) {
    let year = Array.from(Array(52).keys());
    year = year.map((week) => {
        return (
            <Week key={ week } yearNo={ yearNo } yearsTillToday={ yearsTillToday } weekNo={ week } />
        );
    });
    let optionalClassName;
    
    if (yearNo % 10 === 0) {
        optionalClassName = "decade-end-year";
    }


    return (
        <div className={`year ${ optionalClassName }`}>
            { year }<span className="year-no">{ String(yearNo + 1).padStart(2, '0') }</span>
        </div>
    );
}

export default Year;