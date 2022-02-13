import React from 'react';
import "./contact.css"

const Contact = () => {
  return (
    <>
      <div className="contact_container">
          <div className="contact_content">
              <button className="main_button"><i class="fa-solid fa-envelope"></i></button>
              <h2 className="contact_h2">Get in touch</h2>
              <div className="contact_div"><i class="fa-solid fa-phone"></i> +1 (415) 228-6768</div>
              <div className="contact_div"><i class="fa-solid fa-envelope"></i> Hello@outfire.in</div>
              <div className="contact_div"><i class="fa-solid fa-location-dot"></i> 660 California Street, San Francisco, CA 94182</div>
          </div>
          <div className="contact_card">
              <form action="">
                  <label htmlFor="fname">First Name:</label>
                  <input className='input' type="text" id='fname' name='firstname' placeholder='Enter your first name...' />

                  <label htmlFor="lname">First Name:</label>
                  <input className='input' type="text" id='lname' name='firstname' placeholder='Enter your last name...' />

                  <label htmlFor="email">Email:</label>
                  <input className='input' type="text" id='email' name='email' placeholder='Enter your email address...' />

                  <label htmlFor="message">Messages:</label>
                  <textarea type="text" id='fname' name='firstname' placeholder='Your Messages...' />
                  
                  <button type="submit" className='submit_button'>CONTACT US</button>
              </form>
          </div>
      </div>
    </>
  )
}

export default Contact;
