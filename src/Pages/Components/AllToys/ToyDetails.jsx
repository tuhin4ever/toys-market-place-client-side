import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toy = useLoaderData();
  // console.log(toy);
  const {
    name,
    picture_url,
    rating,
    category,
    price,
    quantity,
    description,
    postedBy,
  } = toy;

  return (
    <div className="w-9/12 mx-auto my-10 bg-base-200">
      <div className="hero">
        <div className="hero-content flex-col justify-center gap-5 lg:flex-row">
          <img src={picture_url} className="w-96 rounded-lg shadow-2xl" alt={name} />
          <div>
            <h2 className="text-5xl font-bold text-primary">{name}</h2>
            <div className="flex items-center mt-5">
              <p className="text-lg">Rating: </p>
              <Rating
                readOnly
                style={{ maxWidth: 150 }}
                value={rating}
                className="ml-2"
              ></Rating>
            </div>
            {postedBy && <p className="text-lg">Seller: {postedBy}</p>}
            <p className="text-lg">Category: {category}</p>
            <hr className="w-80 h-1 mx-auto my-4 bg-primary border-0 rounded" />
            <h1 className="text-4xl font-semibold text-accent">
              Price: ${price}
            </h1>
            <hr className="w-80 h-1 mx-auto my-4 bg-primary border-0 rounded" />
            <p className="text-lg">Quantity: {quantity}</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-center">Description</h3>
        <p className="w-2/3 mx-auto text-lg py-5">{description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
