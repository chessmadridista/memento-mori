import styles from './login.module.css';
import { Card } from 'antd';

function Login() {
    return (
        <Card className={ styles["card-login"] }>
            Login page!
        </Card>
    );
}

export default Login;