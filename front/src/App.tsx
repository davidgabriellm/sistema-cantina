import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Nav from './components/nav/nav';


function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex flex-row">
          <Nav/>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
