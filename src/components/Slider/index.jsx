import {ContentCard} from './styles';
import {Section} from '../Section'
// import { Card } from '../Card';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

export function Slider({ title, data, handleDetails, Card }) {
    return (
      <Section title={title}>
        <div className='sliderContainer'>
          <Swiper
            spaceBetween={30}
            loop={true}
            speed={500}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className='swiper-button'
            breakpoints={{
              375: {
                slidesPerView: 2,
                pagination:false,
                watchOverflow: true,
              },
              768: {
                slidesPerView: 2,
                pagination:false,
                watchOverflow: true,
              },
              1060: {
                slidesPerView: 3,
                pagination:true,
                watchOverflow: true,
              },
            }}
          >
            <ContentCard>
              {data.map((dish) => (
                <SwiperSlide key={String(dish.id)} className='swiperSlider'>
                  <Card data={dish} handleDetails={handleDetails} />
                </SwiperSlide>
              ))}
            </ContentCard>
          </Swiper>
        </div>
      </Section>
    );
}