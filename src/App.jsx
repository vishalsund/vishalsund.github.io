import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Essay from './pages/Essay.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/essay/:id" element={<Essay />} />
      </Routes>
    </Router>
  );
}

export default App;