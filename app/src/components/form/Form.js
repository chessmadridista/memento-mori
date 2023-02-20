import styles from './Form.module.scss';
import { Card } from 'antd';
import { DatePicker, Button, Form, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';
import { setNoOfWeeks, setNoOfYears, setAgeAtDeath } from '../calendar/calendarSlice';
import { useDispatch } from 'react-redux';

function FormContainer() {
    const NAVIGATE = useNavigate();
    const DISPATCH = useDispatch();
    
    function onFinish(values) {
        const BIRTHDATE = values["birthdate"]["$d"];
        const CURRENT_DATE = new Date();
        const DIFFERENCE_BETWEEN_DOB_AND_CURRENT_DATE_IN_MILLISEC = Math.abs(BIRTHDATE - CURRENT_DATE);
        const DIFFERENCE_BETWEEN_DOB_AND_CURRENT_DATE_IN_DAYS = Math.round(DIFFERENCE_BETWEEN_DOB_AND_CURRENT_DATE_IN_MILLISEC / (1000 * 60 * 60 * 24));
        const DIFFERENCE_BETWEEN_DOB_AND_CURRENT_DATE_IN_YEARS = Math.round(DIFFERENCE_BETWEEN_DOB_AND_CURRENT_DATE_IN_DAYS / 365);
        const NO_OF_WEEKS_SINCE_LAST_BIRTHDAY = Math.round(DIFFERENCE_BETWEEN_DOB_AND_CURRENT_DATE_IN_DAYS / (7 * (DIFFERENCE_BETWEEN_DOB_AND_CURRENT_DATE_IN_YEARS + 1)));
        const AGE_AT_DEATH = values["death age"];
        DISPATCH(setNoOfWeeks(NO_OF_WEEKS_SINCE_LAST_BIRTHDAY));
        DISPATCH(setNoOfYears(DIFFERENCE_BETWEEN_DOB_AND_CURRENT_DATE_IN_YEARS));
        DISPATCH(setAgeAtDeath(AGE_AT_DEATH));
        const PATH = "/calendar";
        NAVIGATE(PATH);
    }

    return (
        <Card className={ styles.card }>
            <Form 
            className={ styles.form }
            layout="vertical"
            onFinish={ onFinish }>
                <Form.Item
                    label="Birthdate (YYYY-MM-DD)"
                    name="birthdate"
                    rules={
                        [
                            {
                                required: true,
                                message: "Please enter your birth date.",
                            },
                        ]
                    }>
                    <DatePicker className={ styles.input } disabledDate={ d => d.isAfter(Date())} placeholder="1996-09-15" />
                </Form.Item>
                <Form.Item
                    label="Death age"
                    name="death age"
                    rules={
                        [
                            {
                                required: true,
                                message: "Please enter age at your death.",
                            }
                        ]
                    }>
                    <InputNumber className={ styles.input } addonAfter="years" placeholder="80" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>Show calendar</Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default FormContainer;