import styles from './Form.module.scss';
import { Card } from 'antd';
import { DatePicker, Button, Form, InputNumber } from 'antd';


function FormContainer() {
    return (
        <Card className={ styles.card }>
            <Form className={ styles.form }
            layout="vertical">
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
                    <DatePicker className={ styles.input } placeholder="1996-09-15" />
                </Form.Item>
                <Form.Item
                    label="Life expectancy (years)"
                    name="life expectancy"
                    rules={
                        [
                            {
                                required: true,
                                message: "Please enter your life expectancy.",
                            }
                        ]
                    }>
                    <InputNumber className={ styles.input } placeholder="80" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>Show calendar</Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default FormContainer;