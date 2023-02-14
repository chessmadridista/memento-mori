import './Week.css';

function Week({ yearNo, yearsTillToday }) {
    let optionalClassName = "";

    if (yearNo < yearsTillToday) {
        optionalClassName = "is-year-over";
    }

    return (
        <div className={ `week ${ optionalClassName }` }></div>
    );
}

export default Week;