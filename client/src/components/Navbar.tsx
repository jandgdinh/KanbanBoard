import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import LoginData from '../interfaces/LoginData';

const Navbar = (click: LoginData) => {
  const [ loginCheck, setLoginCheck ] = useState(false);

  const checkLogin = () => {
    if(auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck])

  return (
    <div className='nav'>
      <div className='nav-title'>
        <Link to='/'>Krazy Kanban Board</Link>
      </div>
      <ul>
      {
        !loginCheck ? (
          <li className='nav-item'>
            <button className="login-button" type='button'>
              <Link to='/login'>Login</Link>
            </button>
          </li>
        ) : (
          <li className='nav-item'>
            <button type='button' onClick={() => {
              auth.logout();
              click.setLoggedIn(false);
            }}>Logout</button>
          </li>
        )
      }
      <li className='nav-item'>
        <button className="new-ticket-button" type='button'>
          <Link to='/create'>New Ticket</Link>
        </button>
      </li>
      </ul>
    </div>
  )
}

export default Navbar;
