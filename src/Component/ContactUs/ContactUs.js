import React, { useEffect, useState } from 'react'
import "./ContactUs.css"
import ScrollReveal from 'scrollreveal'

const ContactUs = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.contact-main', {})

    return () => sr.destroy();
  }, []);

  // form
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name;
    const phoneNumber = formData.number;
    const message = formData.message;

    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Message:', message);

    setFormData({
      name: '',
      number: '',
      message: ''
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };


  return (
    <>
      <div className="contact">
        <div className="contact-main">
          <div className="contact-left">
            <h2>Are you locked out of your home or car? </h2>
            <p>At Near Me Key Maker, we pride ourselves on delivering a wide range of key-making services to meet your diverse requirements. From duplicating keys for residential and commercial properties to crafting high-security keys for advanced locking systems, for experienced technicians use state-of-the-art equipment to ensure precision and accuracy.</p>
            <p> Count on us for efficient key cutting, programming, and duplication services, all conveniently located near you.</p>
            {/* <div className="contact-button">
              <p>Contact With Us</p>
            </div> */}
          </div>
          <div className="contact-right">
            <h3 style={{ paddingBottom: "10px" }}>Get a Quick Help </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  value={formData.name}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  value={formData.number}
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Phone No."
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={formData.message}
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Get Call Back
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
