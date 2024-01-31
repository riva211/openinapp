import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Screen from './components/Screen'

function App() {
  return (
    <Routes>
      <Route exact path="/screen" element={<Screen />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
