/* eslint-disable @next/next/no-img-element */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    interval: 5000,
  };
  return (
    <div className="relative text-black">
      <div className="absolute w-full bg-gradient-to-t h-32 from-gray-200 to-transparent bottom-0 z-20" />
      <Carousel {...settings}>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="first"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/6ff"
            alt="first"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/7ma"
            alt="first"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
