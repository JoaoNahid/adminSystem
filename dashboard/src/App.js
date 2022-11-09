import logo from './logo.svg';
import './App.css';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';

function App() {
  return (
    // <Dashboard />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:page" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
