import { useState } from 'react';
import './App.css';
import { Documents } from './pages/mudocument/mydocument';
import { Routes, Route } from 'react-router-dom'; 
import Login from './pages/login/login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/documents" element={<Documents />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
