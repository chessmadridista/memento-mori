import styles from './Spinner.module.css';
import { Spin } from "antd";

function Spinner() {
    return (
        <div className={ styles.container }>
            <Spin tip="Loading" size='large' />
        </div>
    );
}

export default Spinner;