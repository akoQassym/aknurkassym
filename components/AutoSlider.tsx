import { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface AutoSliderProps {
  slidesToShow: number;
  autoplay: boolean;
  autoplaySpeed: number;
  children: ReactNode;
}

const AutoSlider: React.FC<AutoSliderProps> = ({ slidesToShow = 1, autoplay = false, autoplaySpeed = 2000, children }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container auto-slider">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default AutoSlider;
