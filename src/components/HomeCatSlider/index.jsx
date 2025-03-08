import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom" 



const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8'>
      <div className="container">
          <Swiper
            slidesPerView={8}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Electronics</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Fashion</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/13-cz_categoryimagelist.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Leather Watch</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/14-cz_categoryimagelist.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Rolling Diamond</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Furniture</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Footwear</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Purse</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Gaming</h3>
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" >
              <div className="item py-7 px-3 bg-white rounded-sm text-center
              flex items-center justify-center flex-col">
                  <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/53-home_default/today-is-a-good-day-framed-poster.jpg" alt="" 
                  className='w-[60px] transition-all'/>
                  <h3 className='text-[16px] font-[500] mt-3'>Laptop Bags</h3>
              </div>
              </Link>
            </SwiperSlide>

      </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider

