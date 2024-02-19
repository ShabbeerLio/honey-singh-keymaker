import React from 'react'
import About from '../Component/About/About'
import Banner from '../Component/Banner/Banner'
import Services from '../Component/Services/Services'
import ContactUs from '../Component/ContactUs/ContactUs'
import NavBar from '../Component/NavBar/NavBar'
import Footer from '../Component/Footer/Footer'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <section className="Banner-box" id="home">
          <Banner />
        </section>
        <section className="section" id="about">
          <About />
        </section>
        <section className="section" id="services">
          <Services />
        </section>
        <section className="section" id="contactUs">
          <ContactUs />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Home
