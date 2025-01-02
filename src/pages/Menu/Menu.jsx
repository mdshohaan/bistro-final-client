import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzatImg from "../../assets/menu/pizza-bg.jpg";
import saladtImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover*/}
      <Cover img={menuImg} title={"our menu"}></Cover>
      <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzatImg}></MenuCategory>
      {/* salad menu items */}
      <MenuCategory items={salad} title={"salad"} img={saladtImg}></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
