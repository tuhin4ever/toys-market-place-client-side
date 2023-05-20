import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ReactTabs = () => {
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
            <p>{category}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 my-container">
              {toys.slice(0, 3).map((toy, index) => (
                <div key={index} className="card   w-96 bg-base-100 shadow-xl">
                  <figure>
                    <img  className="w-9/12 rounded" src={toy.picture_url}  />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{toy.name}</h2>
                    <Rating
                      className="mx-auto"
                      style={{ maxWidth: 150 }}
                      value={toy.rating}
                      readOnly
                    />
                    <div className="flex justify-start">
                        <p className="mr-36">price:  {toy.price}</p>
                      <button className="my-btn">Buy Now</button>
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
