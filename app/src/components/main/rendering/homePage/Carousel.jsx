
"use client";
import Image from "next/image";
import Slider from "react-slick";
function LazyLoad() {

  const images = [
    "/images/carousel3.jpg",
    "/images/carousel4.jpg",
    "/images/carousel2.jpg",
    "/images/carousel1.jpg",
  ]

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0
  };
  return (
    <div className="slider-container p-4">
      <Slider {...settings} >
        {images.map((image, index) => (
            <div key={index} className="relative w-full">
            <Image src={image} width={2000} height={1000} alt="test" className="w-full  sm:h-96  object-cover"/>
          </div>
        ))}
      
      </Slider>
    </div>
  );
}

export default LazyLoad;
