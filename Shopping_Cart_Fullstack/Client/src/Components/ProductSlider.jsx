import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductSlider() {
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
    <div className="slider-container" style={{ width:"97%", margin:"auto", marginTop:"1rem", height:"320px", padding:"20px", position:"relative", zIndex:"-1" }}>
      <Slider {...settings}>
        <div>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f241e768f8367561.jpg?q=20" alt=""/>
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/61775218f4487fe8.jpg?q=20" alt=""/>
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1e31c9d65e3b4592.jpg?q=20" alt=""/>
        </div>
        {/* <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20" alt=""/>
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f241e768f8367561.jpg?q=20" alt=""/>
        </div>
        <div>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f241e768f8367561.jpg?q=20" alt=""/>
        </div> */}
      </Slider>
    </div>
  );
}

export default ProductSlider;
