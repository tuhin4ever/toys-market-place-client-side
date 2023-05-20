import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ToysCard = ({ toy }) => {
  const {
    _id,
    picture_url,
    name,
    category,
    subCategory,
    price,
    quantity,
    description,
  } = toy;

  return (
    <div>
      <div className="mt-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-2">
        <LazyLoadImage
          className="rounded-t-lg"
          loading="lazy"
          width="100%"
          height="100%"
          src={picture_url}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold ">{name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
             
          </p>
          <p className="flex items-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
             
          </p>
          <p className="flex items-center gap-2 mb-3 font-normal text-gray-700 dark:text-gray-400">
            
          </p>
          <div className="flex justify-between">
           
              <button className="my-btn">View details</button>
           
            <div className="flex gap-2 items-center">
             
              <span className="text-gray-700">$ {price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
