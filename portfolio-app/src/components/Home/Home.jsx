import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='main-home'>
        <div className="intro">
            <div className="intro-content">
            <h1>Welcome to my Portfolio !</h1>
            <p>
            Hii I am Suraj Bhan Singh Full Stack Web Developer. As a Full Stack Web Developer, I am eager to learn and committed to harnessing my passion and dedication to create innovative and user-centric solutions that make a positive impact in the digital world.
            </p>
            <button>Resume</button>

            </div>
          
        </div>
        <div className="profile-picture">
           <div className="profile-img">
           <img src="https://github.com/surajbhan-3/react-resume/blob/main/src/assests/surajbhan-res.jpg?raw=true" alt="" />
           </div>
        </div>

    </div>
  )
}

export default Home