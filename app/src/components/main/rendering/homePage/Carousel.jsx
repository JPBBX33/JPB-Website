
"use client";
import Image from "next/image";
import Slider from "react-slick";
function LazyLoad() {

  const images = [
    "/images/JP1_1.jpg",
    "/images/BJPB_156.jpg",
    "/images/BJPB_381.JPG",
    "/images/JP1_4130.JPG",
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
            <Image src={image} width={1500} height={1500} alt="test" className="w-full h-60  sm:h-96 object-cover"/>
          </div>
        ))}
      
      </Slider>
    </div>
  );
}

export default LazyLoad;
