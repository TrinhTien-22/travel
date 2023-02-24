import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Narbar.css';
function Navbar() {
  const [click , setClick] = useState(false);
  const HandleClick = () => setClick(!click);
  const closeMobileMune = () => setClick(false);
  const [button, setButton] = useState(true)
  
  const showButton = () => {
    if (window.innerWidth <=960){
      setButton(false);
    }else{
      setButton(true);
    };

    
  }
  useEffect(() => {
    showButton();
  },[]);
  window.addEventListener('resize',showButton);
  return (
    <>
       <nav className='navbar'>
           <div className = 'navbar-container'>
              <Link to = "/" className='navbar-logo' onClick={closeMobileMune}>
                  TRAVEL <i className="fab fa-typo3" ></i>
              </Link>
              <div  className= 'menu-icon' onClick= {HandleClick}>
                  <i className={click ? 'fa fa-times' : 'fa fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={(closeMobileMune)}>
                     Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={(closeMobileMune)}>
                     Services
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={(closeMobileMune)}>
                     Products
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={(closeMobileMune)}>
                     Sign Up
                    </Link>
                  </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
           </div>
       </nav>
    </>
  );
}

export default Navbar;