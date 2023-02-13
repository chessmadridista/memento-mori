import './Year.css';
import Week from './Week';

function Year({ yearNo, lifeExpectancy }) {
    let year = Array.from(Array(52).keys());
    year = year.map((week) => {
        return (
            <Week key={ week } yearNo={ yearNo } lifeExpectancy={ lifeExpectancy } />
        );
    });

    return (
        <div className="year">
            <span className="year-no">{ yearNo }</span>{ year }
        </div>
    );
}

export default Year;