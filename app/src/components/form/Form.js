import styles from './Form.module.css';

function Form() {
    return (
        <form>
            <div class={ styles['field__container'] }>
                <label htmlFor="birthDate">Please select your birthdate</label>
                <input type="date" id="birthDate"></input>
            </div>
            <div class={ styles['field__container'] }>
                <label htmlFor="lifeExpectancy">Please enter your life expectancy</label>
                <input type="number" id="lifeExpectancy" min="0" max="150"></input>
            </div>
            <button>Update</button>
        </form>
    );
}

export default Form;