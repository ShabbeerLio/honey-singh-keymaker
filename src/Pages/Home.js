import React from 'react'
import About from '../Component/About/About'
import Banner from '../Component/Banner/Banner'
import Services from '../Component/Services/Services'
import ContactUs from '../Component/ContactUs/ContactUs'

const Home = () => {
  return (
    <>
      <div className="home">
        <Banner />
        <About />
        <Services />
        <ContactUs />
      </div>
    </>
  )
}

export default Home
