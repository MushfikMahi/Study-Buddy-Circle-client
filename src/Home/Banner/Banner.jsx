// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const [text1] = useTypewriter({
    words: ['Discover New Opportunities', 
    'Unlock New Horizons', 'Unleash Infinite Possibilities'],
    loop: 3,
  })
  const [text2] = useTypewriter({
    words: ['Empower Your Team', 
    'Elevate Your Team', 
    'Boost Team Performance'],
    loop: 3,
  })
  const [text3] = useTypewriter({
    words: ['Transform Your Business', 
    'Revolutionize Your Business', 
    'Ignite Business Transformation'],
    loop: 3,
  })
  return (
    <div>
      <Swiper
      style={{
        '--swiper-navigation-color': '#007BA7',
        '--swiper-pagination-color': '#007BA7',
      }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/studying-online-concept-serious-young-woman-being-busy-with-remote-freelance-project-sits-comfortable-sofa-writes-notes-holds-textbook-use-laptop-computer-home-with-wireless-internet_273609-29039.jpg?t=st=1715536609~exp=1715540209~hmac=47b32a9ad5ca21cd11507a158fb92cee04f363252cf85c32f1db2c1b8c09b9c6&w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                {text1}<Cursor cursorColor='#007BA7' />
                </h1>
                <p className="mb-5 text-sm md:text-base">
                Embark on a journey of discovery and unlock new horizons with our groundbreaking innovations. Dive into uncharted territories and expand your horizons like never before.
                </p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/student-working-with-laptop_23-2147666826.jpg?t=st=1715536622~exp=1715540222~hmac=1213907a92eed8325d2e9d5fe5cff08bbb0844c9c66319704cf01ed6b7f5738b&w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                {text2}<Cursor cursorColor='#007BA7' />
                </h1>
                <p className="mb-5 text-sm md:text-base">
                Empower your team with the tools they need to succeed. Our platform offers seamless collaboration, powerful productivity features, and real-time insights to drive growth.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/serious-unshaven-man-drinks-takeaway-coffee-colorful-blank-stickers-attached-wall-drinks-coffee-from-paper-cup-holds-notepads_273609-34096.jpg?t=st=1715536624~exp=1715540224~hmac=ccb561ab9db326258f26b70ecc30c73682ca6aa83c15978ef5f88fac0af124e8&w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                {text3}<Cursor cursorColor='#007BA7' />
                </h1>
                <p className="mb-5 text-sm md:text-base">
                Transform your business with our cutting-edge technologies and tailored solutions. Stay ahead of the competition, streamline processes, and unlock new levels of efficiency and profitability.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}