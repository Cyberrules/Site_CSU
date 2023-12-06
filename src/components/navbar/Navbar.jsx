import React, {useState, useEffect} from 'react'
import './Navbar.scss'
import Logo from "../assets/logo.png";
import { FaSearch,FaUser } from 'react-icons/fa';







function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])


  return (
    <nav>
      
      <div>
        <button onClick={toggleNav} className="btn meniu fas fa-bars " style={{ float: "right" }}></button>
      </div>

      {(toggleMenu || screenWidth > 500) && (
      <ul className="list">
        <li><a href="/home" className="logo"><img className="imagine" src={Logo} alt="logo" /></a></li>
        <li><a href="/home">ACASA</a></li>
        <li><a href="/despre">DESPRE</a></li>
        <li><a href="/meciuri">MECIURI</a></li>
        <li><a href="/noutati">NOUTĂȚI</a></li>
        <li><a href="/echipa">ECHIPA</a></li>
        <li><a href="/juniori">JUNIORI</a></li>



        <div className="searchBox">
  <input type="text" className="searchInput" id="searchInput" name="searchInput" placeholder="Search" />
  <button className="searchButton">
    <FaSearch />
  </button>
</div>

<div className="login">
  <button id="loginButton" name="loginButton">
    <FaUser />
  </button>
</div>

   
     


      </ul>
      )}
   
      
    </nav>
  )
}

export default Navbar