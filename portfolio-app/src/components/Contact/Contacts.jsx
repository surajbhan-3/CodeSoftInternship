import React from 'react'
import "./Contact.css"

function Contacts() {
  return (
    <div className='main-contacts' id='main-contacts'>
    
           <div className="contacts-wrapper">
                <div className="contacts-content">
                    <div className="contacts-heading">
                      <h1>Contact me</h1> 
                </div>

                   <div className="contact-form">

                        
                      <form action="">
                      <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter your name' />
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                        <label htmlFor="">Message</label>   
                        <textarea name="text-area" id="textArea" cols="30" rows="10"></textarea>
                         <button>Send</button>
                      </form>
                   </div>


           </div>
            
            
        </div>

    </div>
  )
}

export default Contacts