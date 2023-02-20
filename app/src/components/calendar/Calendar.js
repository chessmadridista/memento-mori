import styles from './Calendar.module.css';
import Year from './components/Year';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Calendar() {
    const noOfYearsSinceBirth = useSelector((state) => state.calendar.noOfYearsSinceBirth);
    let years = Array.from(Array(80).keys());
    years = years.map((year) => {
        return (
            <Year key={ year } yearNo={ year } yearsTillToday={ noOfYearsSinceBirth } />
        );
    });

    const NAVIGATE = useNavigate();

    function backToHome() {
        const PATH = "/";
        NAVIGATE(PATH);
    }

    return (
        <>
            <Button type="link" icon={ <ArrowLeftOutlined /> } onClick={ backToHome }>Back</Button>
            <div className={ styles.calendar }>
                { years }
            </div>
        </>
    );
}

export default Calendar;