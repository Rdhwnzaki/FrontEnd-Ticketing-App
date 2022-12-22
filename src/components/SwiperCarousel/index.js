import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Assets from "../../images";

function SwiperCarousel() {
  return (
    <div>
      <div
        className="container text-white"
        style={{
          backgroundColor: "#2395FF",
          borderRadius: "35px",
          width: "1220px",
          marginTop: "100px",
        }}
      >
        <h6 className="pt-5">TOP 10</h6>
        <h5 className="mb-5">Top 10 destinations</h5>
        <Swiper
          slidesPerView={5}
          spaceBetween={2}
          slidesPerGroup={5}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-5">
            <section>
              <img
                src={Assets.desti1}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">PARIS</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti2}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">BALI</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti3}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">SINGAPORE</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti4}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">AGRA</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti5}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">SYDNEY</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti1}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">PARIS</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti2}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">BALI</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti3}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">SINGAPORE</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti4}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">AGRA</h6>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section>
              <img
                src={Assets.desti5}
                alt=""
                style={{ borderRadius: "50%", border: "4px solid #fff" }}
              />
              <h6 className="mt-4">SYDNEY</h6>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperCarousel;
