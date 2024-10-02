import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Auth from './utils/auth';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.loggedIn());

  const checkLogin = (bool: boolean) => {
    setLoggedIn(bool);
  };
  return (
    <div className='container'>
      <Navbar loggedIn={loggedIn} setLoggedIn={checkLogin}/>
      <main>
        <Outlet context={{loggedIn, setLoggedIn: checkLogin}}/>
      </main>
    </div>
  )
}

export default App
