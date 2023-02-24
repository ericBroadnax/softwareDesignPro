import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FuelQuoteHistory from './components/FuelQuoteHistory';
import Login from './components/Login';
import Register from './components/Register';
import FinishReg from './components/FinishReg';



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/fuel-quote-history" element={<FuelQuoteHistory />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/finish-reg" element={<FinishReg />}/>
      </Routes>
      
    </>
  );
}

export default App;
