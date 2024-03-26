import './navbar.css';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';

function Navbar() {
  const [navbarPopUp, setNavbarPopUp] = useState(false);

  // 錨點
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setNavbarPopUp(false);
    }
    console.log('iiiii');
    setNavbarPopUp(false); // Close navbar popup after clicking on a link
  };
  return (
    <>
      <nav
        style={{
          display: 'flex',
          margin: '10px',
          color: 'white',
          fontSize: '30px',
          position: 'relative',
        }}
      >
        <div></div>
        <div className="navbar">
          <div style={{ position: 'absolute', right: '15%' }}>
            <a
              className="text-white"
              onClick={() => {
                scrollToSection('content');
              }}
            >
              About
            </a>
          </div>
          <div style={{ position: 'absolute', right: '2%' }}>
            <a
              className="text-white"
              onClick={() => {
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="navbar2">
          <MenuOutlined
            style={{
              position: 'absolute',
              right: '2%',
              display: navbarPopUp ? 'none' : 'block',
            }}
            onClick={() => setNavbarPopUp(!navbarPopUp)}
          />
          <CloseOutlined
            style={{
              position: 'absolute',
              right: '2%',
              display: navbarPopUp ? 'block' : 'none',
            }}
            onClick={() => setNavbarPopUp(!navbarPopUp)}
          />
          <div
            style={{
              display: navbarPopUp ? 'block' : 'none',
              backgroundColor: 'black',
              width: '1100px',
              height: '700px',
              position: 'absolute',
              top: '90%',
              right: '4%',
              zIndex: '3',
            }}
          >
            <div
              className="mt-10  text-5xl cursor-pointer hover:text-blue-400"
              onClick={() => {
                scrollToSection('content');
              }}
            >
              About
            </div>
            <div
              className="mt-10  text-5xl cursor-pointer hover:text-amber-400"
              onClick={() => {
                scrollToSection('contact');
              }}
            >
              Contact
            </div>
          </div>
        </div>
      </nav>
      {/* <header className="header">
     <nav className="nav container">
     <a href="/" className="nav__logo">Logo</a>

       <div
         className={"nav__menu"}
         id="nav-menu"
       >
         <ul className="nav__list">
           
           
           <li className="nav__item">
           <a href="#about" className="nav__link"  >About</a>

           </li>
           <li className="nav__item">
           <a href="#contact" className="nav__link"  >Contact</a>

           </li>
         </ul>
         <div className="nav__close" id="nav-close">
           
         </div>
       </div>

       <div className="nav__toggle" id="nav-toggle">
         
       </div>
     </nav>
   </header> */}
    </>
  );
}

export default Navbar;
