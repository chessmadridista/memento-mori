import styles from './Form.module.scss';
import { Card } from 'antd';
import { DatePicker, Button, Form, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';

function FormContainer() {
    const NAVIGATE = useNavigate();
    
    function onFinish(value) {
        NAVIGATE("/calendar");
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