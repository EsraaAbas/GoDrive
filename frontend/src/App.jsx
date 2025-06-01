import { useState } from 'react';
import './App.css';
import { Documents } from './pages/mudocument/mydocument';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </>
  );
}

export default App;
