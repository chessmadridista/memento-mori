import './Year.css';
import Week from './Week';

function Year({ yearNo }) {
    let year = Array.from(Array(52).keys());
    year = year.map((week) => {
        return (
            <Week key={ week } yearNo={ yearNo } />
        );
    });

    return (
        <div className="year">
            { year }
        </div>
    );
}

export default Year;