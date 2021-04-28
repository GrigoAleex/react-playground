import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from "./pages/index";

function App() {
  return (
    <Router>
      <Home></Home>
    </Router>
  );
}

export default App;
