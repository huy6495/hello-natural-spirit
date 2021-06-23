import "./BannerSlider.css";

import React from "react";

//slider import
import Slider from "react-slick";

//icons import
import back from "../../Assets/icons/back-session.png";
import next from "../../Assets/icons/next-session.png";

//image import
import full1 from "../../Assets/ProductImg/FullProduct1.jpg";
import full2 from "../../Assets/ProductImg/FullProduct2.jpg";
import full3 from "../../Assets/ProductImg/FullProduct3.jpg";
import full4 from "../../Assets/ProductImg/FullProduct4.jpg";

//customize arrow carousel
export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="carouselIndicators"
      style={{
        backgroundImage: `url(${back})`,
        left: props.left,
        top: props.top,
      }}
      onClick={onClick}
    />
  );
}

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="carouselIndicators"
      style={{
        backgroundImage: `url(${next})`,
        right: props.right,
        top: props.top,
      }}
      onClick={onClick}
    />
  );
}

//react functional component
export default function BannerSlider() {
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow right="30px" />,
    prevArrow: <SamplePrevArrow left="30px" />,
    appendDots: (dots) => <ul style={{ fontSize: "50px" }}> {dots} </ul>,
  };

  return (
    <div className="sliderTrailer ">
      <Slider {...settings2}>
        <div>
          <div className="img-product">
            <img style={{ width: "100%", height: "750px" }} src={full1}></img>
          </div>
        </div>
        <div>
          <div className="img-product">
            <img style={{ width: "100%", height: "750px" }} src={full2}></img>
          </div>
        </div>
        <div>
          <div className="img-product">
            <img style={{ width: "100%", height: "750px" }} src={full3}></img>
          </div>
        </div>
        <div>
          <div className="img-product">
            <img style={{ width: "100%", height: "750px" }} src={full4}></img>
          </div>
        </div>
      </Slider>
    </div>
  );
}
