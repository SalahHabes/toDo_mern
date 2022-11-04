import './scss/App.scss'
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="page">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LogIn/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
