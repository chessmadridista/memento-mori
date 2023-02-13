import './Week.css';

function Week({ yearNo, lifeExpectancy }) {
    let optionalClassName = "";

    if (yearNo < lifeExpectancy) {
        optionalClassName = "is-year-over";
    }

    return (
        <div className={ `week ${ optionalClassName }` }></div>
    );
}

export default Week;