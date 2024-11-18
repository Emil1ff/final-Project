import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSliderData } from '../../features/actions/sliderAction';
import { RootState } from '../../functions/store/store';
import './slider.css';

interface SliderItem {
  name: string;
  image?: string;
}

interface SliderData {
  play: SliderItem[];
  discover: SliderItem[];
  create: SliderItem[];
  distribute: SliderItem[];
}

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();
  const menuData = useSelector((state: RootState) => state.slider.sliderData as SliderData | null);

  useEffect(() => {
    dispatch(fetchSliderData());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (menuData?.items) {
        setCurrentSlide((prev) => (prev + 1) % menuData.items.length);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [menuData]);

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="slider">
      <div className="container">
        {menuData?.items &&
          menuData.items.map((item, index) => (
            <div
              key={index}
              className={`slide ${currentSlide === index ? 'active' : ''}`}
              style={{
                transform: `translateX(${-currentSlide * 100}%)`,
              }}
            >
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.descr}</p>
                <div className="buttons">
                  <a href="#" className="learn">
                    Learn More
                  </a>
                  <a href="#" className="wishlist">
                    Add to Wishlist
                  </a>
                </div>
              </div>
              {item.image && (
                <div
                  className="image"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    borderRadius: '10px',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    zIndex: -1,
                    backgroundBlendMode: 'overlay',
                    opacity: 0.7,
                    transition: 'opacity 1.5s ease-in-out',
                  }}
                ></div>
              )}
            </div>
          ))}
      </div>
      <div className="thumbnails">
        {menuData?.items &&
          menuData.items.map((item, index) => (
            <div
              key={`${index}-${currentSlide}`}
              className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className="thumbnail-bg"></div>
              {item.image && <img src={item.image} alt={item.title} />}
              <h3>{item.title}</h3>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Slider;
