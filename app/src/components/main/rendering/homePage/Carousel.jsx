
"use client";
import Image from "next/image";
import Slider from "react-slick";
function LazyLoad() {


  const images = [
    "/images/JP1_1.JPG",
    "/images/BJPB_286.JPG",
    "/images/JP1_5218.JPG",
    "/images/BJPB_333.JPG",
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
            <div key={index} className="w-full max-h-96">
            <Image src={image} width={2000} height={500} alt="test"/>
          </div>
        ))}
      
      </Slider>
    </div>
  );
}

export default LazyLoad;
