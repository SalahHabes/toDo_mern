import './scss/App.scss'
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages
import Home from "./pages/Home"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className="page">
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
