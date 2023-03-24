import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom"

function Navbar  ()  {

    const handleClick = () => {

        localStorage.clear();
        window.location.reload()
    }

  return (
    <div>
        <ul className='bar'>
            <li className='item'>
                <Link class="navigation active" to="/">Home</Link>
            </li>
            <li className='item'>
                <Link className='navigation' to="">News</Link>
            </li>
            <li className='item'>
                <Link className='navigation' to="">Contact</Link>
            </li>
            <li className='item'>
                <Link className='navigation' to="">About</Link>
            </li>
            <li className='item'>
                <button onClick={handleClick} type="submit" className='btn btn-outline-success mt-2 ml-5'>Logout</button>
            </li>
        </ul>
    </div>
  )
}

export default Navbar