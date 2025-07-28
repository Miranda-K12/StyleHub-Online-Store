import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ProductCard from "../../components/productCard/ProductCard";

const SwiperLayout = ({ products }) => {
  const maxSlides = 4;

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={products.length >= maxSlides}
      breakpoints={{
        480: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      style={{ padding: "0 12px" }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div
            style={{
              maxWidth: "350px",
              margin: "0 auto",
              marginBottom: "64px",
            }}
          >
            <ProductCard product={product} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperLayout;
