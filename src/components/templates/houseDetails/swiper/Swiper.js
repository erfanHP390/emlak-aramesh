"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import swiperStyles from "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

function ImageSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (mainSwiper && mainSwiper.autoplay) {
      if (isHovered) {
        mainSwiper.autoplay.stop();
      } else {
        mainSwiper.autoplay.start();
      }
    }
  }, [isHovered, mainSwiper]);

  return (
    <div
      className={swiperStyles.swiper_container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Swiper اصلی برای تصاویر بزرگ */}
      <div className={swiperStyles.main_swiper}>
        <Swiper
          spaceBetween={10}
          navigation={{
            nextEl: `.${swiperStyles.swiper_button_next}`,
            prevEl: `.${swiperStyles.swiper_button_prev}`,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs, Autoplay]}
          className={swiperStyles.main_swiper}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={setMainSwiper}
          grabCursor={true}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={swiperStyles.slide_image_container}>
                <img
                  src={image}
                  alt={`تصویر ${index + 1} از ملک`}
                  className={swiperStyles.main_image}
                />
              </div>
            </SwiperSlide>
          ))}

          {/* دکمه‌های ناوبری سفارشی */}
          <div
            className={`${swiperStyles.swiper_button_prev} ${swiperStyles.swiper_nav_btn}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
              />
            </svg>
          </div>
          <div
            className={`${swiperStyles.swiper_button_next} ${swiperStyles.swiper_nav_btn}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
              />
            </svg>
          </div>
        </Swiper>
      </div>

      {/* Swiper کوچک برای thumbnails */}
      <div className={swiperStyles.thumbnail_swiper}>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className={swiperStyles.thumbnail_swiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={swiperStyles.thumbnail_container}>
                <img
                  src={image}
                  alt={`تصویر کوچک ${index + 1}`}
                  className={swiperStyles.thumbnail_image}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ImageSwiper;
