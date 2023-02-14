import styles from './Form.module.scss';

function Form() {
    return (
        <form>
            <div className={ styles['field__container'] }>
                <label htmlFor="birthDate">Please select your birthdate</label>
                <input type="date" id="birthDate"></input>
            </div>
            <div className={ styles['field__container'] }>
                <label htmlFor="lifeExpectancy">Please enter your life expectancy</label>
                <input type="number" id="lifeExpectancy" min="0" max="150"></input>
            </div>
            <button className={ styles['btn__submit'] }>Update</button>
        </form>
    );
}

export default Form;