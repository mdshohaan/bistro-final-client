import React from "react";
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="flex flex-col items-center justify-center">
          <button className="btn btn-outline border-0 border-b-4 mt-4 border-back text-black ">
            Order Your Food
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
