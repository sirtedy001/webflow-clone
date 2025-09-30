import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Enterprice from './pages/Enterprice/Enterprice.jsx';

function App() {
  return (
    <div id='main'>
      <Router>
        <Routes>
          <Route path="/" element={<Enterprice/>} /> 
        </Routes>
      </Router>
      <div className='ad'>CLoned by WEBXPREZ</div>
    </div>
  );
}

export default App;
