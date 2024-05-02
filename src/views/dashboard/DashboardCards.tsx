import { useSelector } from "src/store/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import DashboardCard from "src/components/shared/DashboardCard";

import 'swiper/css';
import 'swiper/css/pagination';

import './Dashboard.css';

const DashboardCards = () => {
    const { cryptoDataSet } = useSelector((state) => state.cryptoReducer);

    return (
        <Swiper
            className="mySwiper"
            loop={true}
            freeMode={true}
            watchSlidesProgress={true}
            slidesPerView={1}
            breakpoints={{
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            {
                cryptoDataSet?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <DashboardCard dataSource={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export { DashboardCards };