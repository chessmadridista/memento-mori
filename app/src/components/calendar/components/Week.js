import './Week.css';

function Week({ yearNo }) {
    let optionalClassName = "";

    if (yearNo < 10) {
        optionalClassName = "is-year-over";
    }

    return (
        <div className={ `week ${ optionalClassName }` }></div>
    );
}

export default Week;