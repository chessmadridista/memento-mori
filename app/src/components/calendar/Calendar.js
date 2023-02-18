import styles from './Calendar.module.css';
import Year from './components/Year';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Calendar() {
    let yearsTillToday = 25;
    let years = Array.from(Array(80).keys());
    years = years.map((year) => {
        return (
            <Year key={ year } yearNo={ year } yearsTillToday={ yearsTillToday } />
        );
    });

    return (
        <>
            <Button type="link" href="/" icon={ <ArrowLeftOutlined /> }>Back</Button>
            <div className={ styles.calendar }>
                { years }
            </div>
        </>
    );
}

export default Calendar;