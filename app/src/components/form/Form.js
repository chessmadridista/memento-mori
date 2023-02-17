import styles from './Form.module.scss';
import { Card } from 'antd';
import { DatePicker, Button, Checkbox, Form, InputNumber } from 'antd';


function FormContainer() {
    return (
        <Card className={ styles.card }>
            <Form className={ styles.form }
            layout="vertical">
                <Form.Item
                    label="Birthdate"
                    name="birthdate"
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
                    label="Life expectancy"
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