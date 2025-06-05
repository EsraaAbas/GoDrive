import './App.css';
import { Documents } from './pages/mudocument/mydocument';
import { Routes, Route } from 'react-router-dom'; 
import Login from './pages/login/login';
import  DriverForm  from './components/driver_form/driverForm.jsx'; 
import  TransportForm from './components/form/form.jsx'; // Assuming the path is correct

function App() {

  return (
    <>
      <Routes>
        <Route path="/documents" element={<Documents />} />
        <Route path="/login" element={<Login />} />
        <Route path='/form' element={<TransportForm />} />
        <Route path="/driver-form" element={<DriverForm />} />
      </Routes>
    </>
  );
}

export default App;
