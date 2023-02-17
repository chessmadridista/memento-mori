import styles from './App.module.scss';
// import Calendar from './components/calendar/Calendar';
import FormContainer from './components/form/Form';
// import { useState } from 'react';

function App() {
  // const [showForm, setShowForm] = useState(true);

  return (
    <>
      <h1 className={ styles.heading }>Memento Mori Calendar</h1>
      <FormContainer />
      {/* { showForm ? <FormContainer /> : <Calendar /> } */}
    </>
  );
}

export default App;
