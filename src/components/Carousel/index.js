import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, A11y, EffectFade, Pagination } from "swiper"

import styled from "styled-components"
import Img from "gatsby-image"
import ProductCard from "../ProductCard"
SwiperCore.use([Pagination])

const CarouselComponent = styled.div`
  display: block;
  width: 100%;
  position: relative;
  margin: 2rem auto;
  max-width: 1280px;

  .card {
    width: 100%;
    position: relative;
    text-align: center;
    padding: 1rem;
  }

  .inner {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.9122023809523809) 16%,
      rgba(241, 241, 241, 0.9037990196078431) 50%
    );
    width: 100%;
    padding-bottom: 2rem;
    overflow: hidden;
    position: relative;
  }

  .image {
    width: 100%;
    &::after {
      width: 100%;
      display: block;
      content: "";
      padding-bottom: 120%;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    margin-bottom: 1rem;
  }

  .image {
    width: 100%;
    height: 100%;
  }

  .title {
    font-size: 1.6rem;
    margin: 0.5rem;
    font-weight: 400;
  }

  .title {
    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 0.1rem;
      background: rgb(51, 51, 51);
      background: linear-gradient(
        90deg,
        rgba(51, 51, 51, 0) 10%,
        rgba(51, 51, 51, 1) 45%,
        rgba(51, 51, 51, 1) 55%,
        rgba(51, 51, 51, 0) 89%
      );
      margin-bottom: 1rem;
    }
  }

  .price {
    font-size: 1.6rem;
    margin: 0;
    padding: 0.5rem 1rem;
    color: green;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: 300;
  }

  .mark {
    position: absolute;
    left: 1rem;
    top: 1rem;
    width: 20rem;
    padding: 0.5rem;
    background-color: red;
    color: #fff;
    transform: rotate(-45deg) translate(-6.2rem, -7rem);
    transform-origin: center;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 600;

    &.featured {
      transform: rotate(-45deg) translate(-6.2rem, -4.4rem);
      background-color: violet;
    }
  }

  .link {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }
`

const Carousel = ({ slides = [], title = "Featured products" }) => {
  return (
    <CarouselComponent>
      <h4 className="carousel-title">{title}</h4>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        loop={true}
        autoplay={true}
        breakpoints={{
          650: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {slides.map(({ title, description, image, url }, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
            <ProductCard title={title} image={image} url={url} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination" />
      </Swiper>
    </CarouselComponent>
  )
}

export default Carousel
