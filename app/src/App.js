import styles from './App.module.scss';
import FormContainer from './components/form/Form';
import Calendar from './components/calendar/Calendar';
import Spinner from './components/auxialiary/spinner/Spinner';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FormContainer />,
  },
  {
    path: '/calendar',
    element: <Calendar />,
  },
]);

function App() {
  return (
    <>
      <Spinner />
      <h1 className={ styles.heading }>Memento Mori Calendar</h1>
      <RouterProvider router={ router } />
    </>
  );
}

export default App;
