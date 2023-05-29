import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h2 className="main-header">React Crud Operations</h2>
        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/create" className="nav-link">Create</Link>
            </li>
            <li>
              <Link to="/read" className="nav-link">Read</Link>
            </li>
            
          </ul>
        </nav>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
