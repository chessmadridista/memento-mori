import styles from './App.module.scss';
import FormContainer from './components/form/Form';
import Calendar from './components/calendar/Calendar';
import Spinner from './components/auxialiary/spinner/Spinner';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from 'react-router-dom';
import { showSpinner, hideSpinner, showNotification, hideNotification } from './components/auxialiary/auxiliarySlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const loading = useSelector((state) => state.auxiliary.loading);

  return (
    <>
      { loading ? <Spinner /> : null }
      <h1 className={ styles.heading }>Memento Mori Calendar</h1>
      <Routes>
        <Route path='/' element={ <FormContainer /> }></Route>
        <Route path='/calendar' element={ <Calendar /> }></Route>
      </Routes>
    </>
  );
}

export default App;
