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
        <img src="https://media.istockphoto.com/id/1185097959/photo/a-mans-hand-holding-a-car-key.jpg?s=612x612&w=0&k=20&c=5rdk5ibFfwF1PRkNrYFjUXRhXMb6KIQVhe9dCln8xS0=" alt="" />
      </div>
    </>
  )
}

export default Banner
