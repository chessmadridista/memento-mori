import './App.scss';
import Calendar from './components/calendar/Calendar';
import FormContainer from './components/form/Form';
import { useState } from 'react';

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <h1>Memento Mori Calendar</h1>
      { showForm ? <FormContainer /> : <Calendar /> }
    </>
  );
}

export default App;
