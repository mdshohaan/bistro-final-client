import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules"; // Import Swiper modules
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/swiper-bundle.css"; // Import all necessary Swiper styles

// Image imports
import Img1 from "../../assets/home/slide1.jpg";
import Img2 from "../../assets/home/slide2.jpg";
import Img3 from "../../assets/home/slide3.jpg";
import Img4 from "../../assets/home/slide4.jpg";
import Img5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am To 10.00pm "}
        heading={"Order Online"}
      ></SectionTitle>
      <div className="relative">
        <Swiper
          // Install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30} // Space between slides
          slidesPerView={3} // Number of slides to show at once
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }} // Navigation arrows
          pagination={{ clickable: true }} // Enable clickable pagination
          scrollbar={{ draggable: true }} // Enable draggable scrollbar
          onSwiper={(swiper) => console.log(swiper)} // Callback when Swiper instance is created
          onSlideChange={() => console.log("Slide changed")} // Callback when slide changes
          loop // Make the slides loop infinitely
        >
          {/* Add image slides */}
          <SwiperSlide>
            <div className="relative">
              <img
                src={Img1}
                alt="Slide 1"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h3 className="text-white text-4xl font-semibold drop-shadow-lg">
                  Salad
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={Img2}
                alt="Slide 2"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h3 className="text-white text-4xl font-semibold drop-shadow-lg">
                  Pizza
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={Img3}
                alt="Slide 3"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h3 className="text-white text-4xl font-semibold drop-shadow-lg">
                  Soup
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={Img4}
                alt="Slide 4"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h3 className="text-white text-4xl font-semibold drop-shadow-lg">
                  Cake
                </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={Img5}
                alt="Slide 5"
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <h3 className="text-white text-4xl font-semibold drop-shadow-lg">
                  Salad
                </h3>
              </div>
            </div>
          </SwiperSlide>

          {/* Optional navigation buttons and pagination */}
          <div className="swiper-button-next absolute top-1/2 right-4 z-10 text-white bg-black bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
          <div className="swiper-button-prev absolute top-1/2 left-4 z-10 text-white bg-black bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7 7-7M19 19l-7-7 7-7"
              />
            </svg>
          </div>

          <div className="swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"></div>
          <div className="swiper-scrollbar"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
