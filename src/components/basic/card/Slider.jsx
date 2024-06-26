import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  return (
    <div className="w-full">
      <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        <div className="h-96 bg-gray-200">
          <h3>1</h3>
        </div>
        <div className="h-96 bg-gray-200">
          <h3>2</h3>
        </div>
        <div className="h-96 bg-gray-200">
          <h3>3</h3>
        </div>
        <div className="h-96 bg-gray-200">
          <h3>4</h3>
        </div>
        <div className="h-96 bg-gray-200">
          <h3>5</h3>
        </div>
        <div className="h-96 bg-gray-200">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
