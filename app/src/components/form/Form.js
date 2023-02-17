import styles from './Form.module.scss';
import { Card } from 'antd';
import { DatePicker, Button, Checkbox, Form, InputNumber } from 'antd';


function FormContainer() {
    return (
        <Card className={ styles.card }>
            <Form className={ styles.form }
            layout="vertical">
                <Form.Item
                    label="Birthdate (YYYY-MM-DD)"
                    name="birthdate"
                    // placeholder="1996-09-15"
                    rules={
                        [
                            {
                                required: true,
                                message: "Please enter your birth date.",
                            },
                        ]
                    }>
                    <DatePicker className={ styles.input } />
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
                    <InputNumber className={ styles.input } />
                </Form.Item>
                <Form.Item>
                    <Button className={ styles.input } type="primary" htmlType="submit">Show calendar</Button>
                </Form.Item>
            </Form>
        </Card>
    );
}

export default FormContainer;