import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import "./Banner.css"

const Banner = () => {

  useEffect(() => {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true,
    });

    sr.reveal('.banner-heading', {})

    return () => sr.destroy();
}, []);

  return (
    <>
      <div className="banner">
        <div className="banner-heading">
          <h1 >Key Maker in Gaur City</h1>
        </div>
        <img src="https://images.unsplash.com/photo-1585336261176-3e8d838e86e3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </>
  )
}

export default Banner
