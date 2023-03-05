import styles from './App.module.scss';
import FormContainer from './components/form/Form';
import Login from './components/login/login';
import Calendar from './components/calendar/Calendar';
import Spinner from './components/auxialiary/spinner/Spinner';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const loading = useSelector((state) => state.auxiliary.loading);

  return (
    <>
      { loading ? <Spinner className={ styles.loader } /> : null }
      <h1 className={ styles.heading }>Memento Mori Calendar</h1>
      <Routes>
        <Route path="/login" element={ <Login /> }></Route>
        <Route path='/' element={ <FormContainer /> }></Route>
        <Route path='/calendar' element={ <Calendar /> }></Route>
      </Routes>
    </>
  );
}

export default App;
