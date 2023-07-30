import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        {/* <Home></Home> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </header>
      </div>
      </Router>
  );
}

export default App;
