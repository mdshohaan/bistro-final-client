import { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import Ordertab from "./Ordertab";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <Ordertab items={salad}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={pizza}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={soup}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={dessert}></Ordertab>
        </TabPanel>
        <TabPanel>
          <Ordertab items={drinks}></Ordertab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
