import React, { useEffect } from 'react'
import "./About.css"
import ScrollReveal from 'scrollreveal'
import AboutKey1 from "../../Assets/about1.jpg"
import AboutKey2 from "../../Assets/about2.jpg"

const About = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.about-main', {})

    return () => sr.destroy();
  }, []);



  return (
    <>
      <div className="aboutUs">
        <div className="about-main">
          <div className="about-left">
            <div className="about-title">
              <h2>Honey Singh Key Maker </h2>
            </div>
            <div className="about-detail">
              <p>If you're locked out of your car, lost your keys, or need ignition repairs, our automotive locksmiths have got you covered. We're equipped to work on a wide range of vehicle makes and models.</p>
              <p>From rekeying and lock replacement to installation of advanced security systems, we ensure the safety of your home. Our experts can assess your property and recommend tailored solutions to enhance your security.</p>
            </div>
          </div>
          <div className="about-right">
            {/* <img className="image1" src={AboutKey1} alt="" /> */}
            <img className="image2" src={AboutKey2} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
