import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container bg-danger" style={{ width:"97%", margin:"auto", marginTop:"1rem", height:"400px", padding:"20px", position:"relative", zIndex:"-1" }}>
      <Slider {...settings}>
        <div className="d-flex justify-content-around align-items-center">
          <img src="https://upload.wikimedia.org/wikipedia/en/3/3d/Maidaan_Poster.jpg?20240414082921" alt="" />
          <div>
          <h1>Enjoy on your TV</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        </div>
        
        <div className="d-flex justify-content-around align-items-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/3/38/Yodha_film_poster.jpg?20231107050148" alt=""/>
        <div>
          <h1>Enjoy on your TV</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        </div>
        <div className="d-flex justify-content-around align-items-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/1/1a/Panchayat_logo.jpg?20240603125708" alt=""/>
        <div>
          <h1>Enjoy on your TV</h1>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        </div>
      </Slider>
    </div>
  );
}

export default MovieSlider;
