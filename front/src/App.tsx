import './App.css';
import Header from './components/header/Header';
import { Outlet, Navigate } from 'react-router-dom';
import Nav from './components/nav/Nav';

function App() {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col lg:flex-row">
        <Nav />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
