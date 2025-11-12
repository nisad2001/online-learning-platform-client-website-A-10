import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bannerimg from "../assets/banner.jpg";
import bannerimg1 from "../assets/banner2.png";

const Banner = () => {
    return (
        <div>
            <section className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            
            <SwiperSlide>
              <div className="relative w-full h-[60vh]">
                <img
                  src={bannerimg}
                  alt="Slide 1"
                  className="w-full h-full object-cover"
                />

                
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start text-white px-10 md:px-20">
                  <h1 className="text-3xl md:text-5xl font-bold mb-3">
                    Learn Anytime, Anywhere 🌍
                  </h1>
                  <p className="text-lg md:text-xl max-w-xl mb-5">
                    Join thousands of learners and start your journey today.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md font-semibold transition">
                    Get Started
                  </button>
                </div>
              </div>
            </SwiperSlide>

            
            <SwiperSlide>
              <div className="relative w-full h-[60vh]">
                <img
                  src={bannerimg1}
                  alt="Slide 2"
                  className="w-full h-full object-cover"
                />
              
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-center items-start text-white px-10 md:px-20">
                  <h1 className="text-3xl md:text-5xl font-bold mb-3">
                    Empower Your Future 🚀
                  </h1>
                  <p className="text-lg md:text-xl max-w-xl mb-5">
                    Access top-quality online courses made for everyone.
                  </p>
                  <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 rounded-md font-semibold transition">
                    Explore Courses
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        </div>
    );
};

export default Banner;