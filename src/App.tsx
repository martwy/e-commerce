import { Outlet } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-slate-950 h-screen'>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
