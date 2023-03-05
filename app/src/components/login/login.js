import styles from './login.module.css';
import { Card, Form, Input, Button } from 'antd';

function Login() {
    function onFinish() {
        alert("Your form has been submitted.");
    }

    return (
        <Card title="Login" className={ styles["card__login"] }>
        <Form 
        className={ styles.form }
        layout="vertical"
        onFinish={ onFinish }>
            <Form.Item
                label="Username"
                name="username"
                rules={
                    [
                        {
                            required: true,
                            message: "Please enter your username.",
                        },
                    ]
                }>
                <Input type="text" className={ styles.input } placeholder="johndoe" allowClear />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={
                    [
                        {
                            required: true,
                            message: "Please enter your password.",
                        },
                    ]
                }>
                <Input type="password" className={ styles.input } placeholder="doe123john" allowClear />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block>Login</Button>
            </Form.Item>
        </Form>
    </Card>
    );
}

export default Login;