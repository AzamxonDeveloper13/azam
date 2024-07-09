import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto mt-24 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
