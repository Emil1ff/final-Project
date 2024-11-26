import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './carousel.css';

import { fetchCarouselData } from '../../features/actions/carouselAction';
import { AppDispatch, RootState } from '../../functions/store/store';

export default function Carousel() {
  const dispatch = useDispatch<AppDispatch>();

  const carouselData = useSelector((state: RootState) => state.carousel.carouselData);

  useEffect(() => {
    dispatch(fetchCarouselData());
  }, [dispatch]);

  return (
    <div className='carousel'>
      <Swiper
       slidesPerView={6}
       spaceBetween={20} 
       className="mySwiper">
        {carouselData?.items.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={item.name} />
            <div className="game-content">
              <span className="category">{item.category}</span>
              <h3 className="name">{item.name}</h3>
              <span className="price">${item.price.toFixed(2)}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
