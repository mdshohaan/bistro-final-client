import featuredImg from "../../assets/home/featured.jpg";
import SectionTitle from "../../components/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured_item text-white pt-5 my-10">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="flex justify-center items-center px-36 py-20 bg-slate-600 opacity-70">
        <div>
          <img className="bg-contain" src={featuredImg} alt="" />
        </div>
        <div className="md:ml-12">
          <p>Aug 10, 2024</p>
          <p>Where can I gest Some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ullam ipsam dicta eos vel earum tempore harum
            aspernatur aliquam ut fuga voluptas distinctio asperiores, numquam
            libero aliquid architecto quam itaque ea quod! Illo, molestiae iusto
            consequuntur, beatae modi delectus vero eveniet facilis ab
            accusantium minus accusamus hic corporis aliquid voluptates.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4 border-white text-white"> Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
