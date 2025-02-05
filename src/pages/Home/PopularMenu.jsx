import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 space-y-5 px-5">
      <SectionTitle
        subHeading={"Chech It Out"}
        heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 ">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4 border-back text-black ">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
