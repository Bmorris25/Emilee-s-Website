import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../src/App.css"; // Add custom styles

const Home = () => {
  return (
    <div>
      <div className="cover container col-xxl-12 px-4 py-5">
        <div className="row flex-md-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-5">
            <img src="Frontend/photos/Emilee-cover.jpg" className="d-block mx-lg-auto img-fluid" id="cover" loading="lazy" alt="Emilee Cover" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Emilee Irwin | Pet-Stylist</h1>
            <p className="text-white-50">in Hurricane, Utah</p>
            <p className="lead text-white">Pampering Pets, Perfecting Style!</p>
          </div>
        </div>
      </div>

      <div className="services container px-4 py-5" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img className="featured-img" src="photos/Washes.jpg" height="300em" alt="Dog grooming service in Hurricane, Utah - Washes" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Washes</h3>
            <p>Keep your pet clean, shiny, and smelling great with our gentle, refreshing washes—because every pet deserves a splash of love!</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img className="featured-img" src="photos/cuts.jpg" height="300em" alt="Pet haircut specialist in Hurricane, Utah - styling" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Cuts</h3>
            <p>Give your furry friend a fresh, stylish look with expert grooming that keeps them happy, healthy, and oh-so-adorable!</p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <img className="featured-img" src="photos/Styling.jpg" height="300em" alt="Professional pet stylist in Hurricane, Utah - Styling" />
            </div>
            <h3 className="fs-2 text-body-emphasis">Styling</h3>
            <p>Transform your pet's look with personalized hair styling that’s as unique and fabulous as they are!</p>
          </div>
        </div>
      </div>

      {/* Swiper Slider Section */}
      <div className="slides container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="swiper-container"
        >
          <SwiperSlide><img src="photos/Slider1.jpg" alt="Slide 1" /></SwiperSlide>
          <SwiperSlide><img src="photos/Slider2.jpg" alt="Slide 2" /></SwiperSlide>
          <SwiperSlide><img src="photos/Slider3.jpg" alt="Slide 3" /></SwiperSlide>
          <SwiperSlide><img src="photos/Slider4.jpg" alt="Slide 4" /></SwiperSlide>
          <SwiperSlide><img src="photos/Slider5.jpg" alt="Slide 5" /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
