import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './CategoryCarousel.css';
import { useNavigate } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import iphone from '../assets/1._iPhones.jpeg.jpg'
import samsung from '../assets/amazing deals/samsung.jpeg.jpg'
import macbooks from '../assets/amazing deals/macbooks.jpeg.jpg'
import laptops from '../assets/amazing deals/laptops.jpeg.jpg'
import ipad from '../assets/amazing deals/ipad.jpeg.jpg'
import accessories from '../assets/amazing deals/accessories.jpeg.jpg'
import smartwatches from '../assets/amazing deals/smartwatches.jpeg.jpg'


const categories = [
  { name: 'iPhone', image: iphone, path: '/iphone' },
  { name: 'Samsung', image: samsung, path: '/samsung' },
  { name: 'iPad', image: ipad, path: '/ipad' },
  { name: 'Smartwatches', image: smartwatches, path: '/smartwatches' },
  { name: 'Accessories', image: accessories, path: '/accessories' },
  { name: 'MacBooks', image: macbooks, path: '/macbooks' },
  { name: 'Laptops', image: laptops, path: '/Laptops' }
];

const CategoryCarousel = () => {
  const navigate = useNavigate();

  return (
    <section className="category-carousel">
      <h2>Amazing Deals</h2>
      <Swiper
     modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="category-card" onClick={() => navigate(cat.path)}>
              <img src={cat.image} alt={cat.name} />
              <div className="overlay">
                <span className="text">{cat.name}</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategoryCarousel;