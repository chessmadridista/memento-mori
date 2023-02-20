import './Week.css';

function Week({ yearNo, yearsTillToday, weekNo }) {
    let optionalClassName = "";

    if (yearNo < yearsTillToday) {
        optionalClassName += "is-year-over";
    }

    if (weekNo == 25) {
        optionalClassName += " " + "middle-week";
    }

    return (
        <div className={ `week ${ optionalClassName }` }></div>
    );
}

export default Week;