import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-main">
          <div className="contact-left">
            <h2>Are you locked out of your home or car? </h2>
            <p>Look no further than Honey Singh Key Maker Gaur City! We are your trusted and experienced locksmith service provider dedicated to resolving all your lock and key emergencies with utmost efficiency and professionalism.</p>
            <p>Emergencies can happen at any time, which is why we're available around the clock. You can rely on us to assist you whenever you're in need.</p>
            <div className="contact-button">
              <p>Contact With Us</p>
            </div>
          </div>
          <div className="contact-right">
            <form>
              <div class="mb-3">
                <input type="Name" class="form-control" id="Name" placeholder='Name' />
              </div>
              <div class="mb-3">
                <input type="number" class="form-control" id="phoneNumber" placeholder='Phone No.' />
              </div>
              <div class="mb-3">
                <input type="textarea" class="form-control" id="Message" placeholder='Message' />
              </div>
              <button type="submit" class="btn btn-primary">Get Call Back</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
