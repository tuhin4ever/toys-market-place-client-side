import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaDollarSign } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ReactTabs = () => {
  AOS.init();
  const [categories, setCategories] = useState([]);
  const [toys, setToys] = useState([]);
  const [category, setCategory] = useState("SportsCar");

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);

  return (
    <div className="text-center">
      <Tabs>
        <TabList>
          {categories.slice(0, 3).map((category, index) => (
            <Tab onClick={() => setCategory(category)} key={index}>
              {category}
            </Tab>
          ))}
        </TabList>

        {categories.slice(0, 3).map((category, index) => (
          <TabPanel key={index}>
            <h2 className="font-semibold text-primary" data-aos="zoom-in">
              {category}
            </h2>
            <div className="flex flex-wrap justify-center">
              {toys.slice(0, 3).map((toy, index) => (
                <div key={index} className="card bg-white shadow-lg rounded-lg w-80 mx-4 my-6 overflow-hidden">
                  <div className="relative">
                    <img className="w-full h-48 object-cover" src={toy.picture_url} alt={toy.name} />
                    <div className="absolute top-2 right-2 rounded-full bg-secondary text-white px-3 py-1">
                      {toy.rating}
                    </div>
                  </div>
                  <div className="px-4 py-2">
                    <h2 className="text-lg font-semibold">{toy.name}</h2>
                    <div className="flex items-center mt-2">
                      <p className="mr-2">Rating:</p>
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={toy.rating}
                        readOnly
                      />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="font-semibold flex items-center">
                        Price: {toy.price}
                        <FaDollarSign className="text-green-500 ml-1" />
                      </p>
                      <button className="my-btn">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ReactTabs;
