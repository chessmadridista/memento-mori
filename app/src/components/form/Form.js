import './Form.css';

function Form() {
    return (
        <form>
            <label htmlFor="birthDate">Please select your birthdate</label>
            <input type="date" id="birthDate"></input>
            <label htmlFor="lifeExpectancy">Please enter your life expectancy</label>
            <input type="number" id="lifeExpectancy" min="0" max="150"></input>
            <button>Update</button>
        </form>
    );
}

export default Form;