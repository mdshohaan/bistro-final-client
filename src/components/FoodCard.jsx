import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-md">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white px-4 mr-4 mt-4 rounded-sm absolute right-0 opacity-70">
        $ {price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <button className="btn btn-outline border-0 border-b-4 mt-4 border-orange-400 text-black bg-slate-100 ">
          Order Your Food
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
