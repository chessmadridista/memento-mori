import './Week.css';
import { useSelector } from 'react-redux';

function Week({ yearNo, yearsTillToday, weekNo }) {
    let optionalClassName = "";
    let weeksTillToday = useSelector((state) => state.calendar.noOfWeeksInCurrentYear);

    if (yearNo < yearsTillToday) {
        optionalClassName += "is-year-over";
    }

    if (yearNo === yearsTillToday && weekNo <= weeksTillToday) {
        optionalClassName += " " + "active-week-of-current-year";
    }

    if (weekNo == 25) {
        optionalClassName += " " + "middle-week";
    }

    return (
        <div className={ `week ${ optionalClassName }` }></div>
    );
}

export default Week;