import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToysCard from "./ToysCard";
import AOS from "aos";
const AllToys = () => {
  AOS.init();
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);

  return (
    <>
      <h1 data-aos="zoom-in" className="text-3xl font-bold text-center mt-10">All Toys</h1>
      <hr className="w-48 h-1 mx-auto  bg-gray-100 border-0 rounded mt-3 dark:bg-orange-700" />
      <div className="grid md:grid-cols-3 my-container">
      {toys.map((toy) => (
          <ToysCard key={toy._id} toy={toy}></ToysCard>
        ))}
      </div>
    </>
  );
};

export default AllToys;
