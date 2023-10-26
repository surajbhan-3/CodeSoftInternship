import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div>

        <div className="main-nav">
            <div className="nav-wrapper">

                     <div className="navbar">
                          <div className="logo">
                             
                              <div className='circle-name'>
                                <h3>Suraj Bhan Singh</h3>
                             </div>

                            
                          </div>
                          <div className="items">
                             <ul className='item-list'>
                                 <li><a href="#main-about">About   </a> </li>
                                 <li><a href="#main-skills">Skills  </a> </li>
                                 <li><a href="#main-projects">Projects</a> </li>
                                 <li><a href="#main-contacts">Contact </a> </li>
                                 <li><a href="#">Resume  </a> </li>
                             </ul>
                          </div>
                     </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar

