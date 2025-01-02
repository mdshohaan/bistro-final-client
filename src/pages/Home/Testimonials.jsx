import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../components/SectionTitle";
// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
const Testimonials = () => {
  const [reviews, setRiviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/reviews")
      .then((res) => res.json())
      .then((data) => {
        setRiviews(data);
      });
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading={"What Our Clinet Say"}
        heading={"testimonials"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24  flex flex-col items-center gap-2">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft size={70} className="m-5" />
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
