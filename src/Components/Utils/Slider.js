import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = (props) => {
    const slides = props.props.map((el, i) => <SwiperSlide key={i} style={{display: "flex", justifyContent: "center"}}>{el}</SwiperSlide>);
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            // spaceBetween={50}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            loop={true}
            // loopFillGroupWithBlank={true}
            // autoplay={{
            //     "delay": 2500,
            //     "disableOnInteraction": false
            // }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log('hello')}
            // onSlideChange={() => console.log('slide change')}
            breakpoints={{
                // "200": {
                //     "slidesPerView": 1,
                // },
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 50
                }}}
        >
            {slides}
        </Swiper>
    );
};