import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, Pagination } from "swiper";
import SwiperClass from "swiper/types/swiper-class";
import bookImg from "../../assets/png/book-img.png";
import emptyBookImg from "../../assets/png/empty-book-img.png";

import { arrOfBooks } from "../../constants/constants";
import styles from "./slider.module.scss";
import "swiper/css";
import "swiper/css/pagination";

interface IProps {
  images: string[];
}

export const Slider: React.FC<IProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<SwiperClass>(null);
  const swiper2Ref = useRef<SwiperClass>();

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Swiper
        data-test-id="slide-big"
        modules={[Thumbs, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        
        onSwiper={(swiper) => {
          if (swiper1Ref.current !== null) {
            /*   swiper1Ref.current = swiper; */
            /* swiper = swiper1Ref.current; */
          }
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={() => console.log("slide change")}
        className="myswiper2"
      >
        {images.map((image) => (
          <SwiperSlide className="img">
            <img src={image} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>

      {images.length > 1 && <Swiper
        controller={{ control: firstSwiper }}
        modules={[Thumbs]}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        className="myswiper hidden_slider"
      >
        {images.map((image) => (
          <SwiperSlide className="swiper-pagination-bullet img" data-test-id='slide-mini' >
            <img src={image} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>}
    </div>
  );
};
