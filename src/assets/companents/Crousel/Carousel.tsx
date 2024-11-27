import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './carousel.css';

import { fetchCarouselData } from '../../features/actions/carouselAction';
import { AppDispatch, RootState } from '../../store/store';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';

interface CarouselProps {
  apiUrl: string;
}

export default function Carousel({ apiUrl }: CarouselProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { carouselData, loading, error } = useSelector((state: RootState) => state.carousel);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    dispatch(fetchCarouselData(apiUrl));
  }, [dispatch, apiUrl]);

  const handlePrev = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.activeIndex;
      swiperRef.current.slideTo(Math.max(currentIndex - 6, 0));
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.activeIndex;
      swiperRef.current.slideTo(currentIndex + 6);
    }
  };

  return (
    <div className="carousel">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className='carousel-container'>
          <div className="carousel-navigation">
            <button className="custom-button prev" onClick={handlePrev}>
              <GrFormPrevious />
            </button>
            <button className="custom-button next" onClick={handleNext}>
              <MdOutlineNavigateNext />

            </button>
          </div>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="mySwiper"
          >
            {carouselData?.items.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt={item.name} />
                <span className='wishlist-modal'>Add to Wishlist</span>
                <span className='add-wishlist'>+</span>
                <div className="game-content">
                  <span className="category">{item.category}</span>
                  <h3 className="name">{item.name}</h3>
                  <span className="price">
                    {isNaN(item.price) ? 'Free' : `$${item.price.toFixed(2)}`}
                  </span>
                </div>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      )}
    </div>
  );
}
