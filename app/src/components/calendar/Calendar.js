import styles from './Calendar.module.css';
import Year from './components/Year';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showSpinner, hideSpinner } from '../auxialiary/auxiliarySlice';

function Calendar() {
    const DISPATCH = useDispatch();
    const noOfYearsSinceBirth = useSelector((state) => state.calendar.noOfYearsSinceBirth);
    const AGE_AT_DEATH = useSelector((state) => state.calendar.ageAtDeath);
    let years = Array.from(Array(AGE_AT_DEATH).keys());
    years = years.map((year) => {
        return (
            <Year key={ year } yearNo={ year } yearsTillToday={ noOfYearsSinceBirth } />
        );
    });

    const NAVIGATE = useNavigate();

    function backToHome() {
        DISPATCH(showSpinner());
        const PATH = "/";
        setTimeout(() => {
            NAVIGATE(PATH);
            DISPATCH(hideSpinner());
        }, 1000);
    }

    return (
        <>
            <Button className={ styles.btn__back } type="link" icon={ <ArrowLeftOutlined /> } onClick={ backToHome }>Back</Button>
            <div className={ styles.calendar }>
                { years }
            </div>
        </>
    );
}

export default Calendar;