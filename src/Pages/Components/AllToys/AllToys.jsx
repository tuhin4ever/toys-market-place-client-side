import React, { useEffect, useState } from "react";
import ToysCard from "./ToysCard";
import AOS from "aos";

const AllToys = () => {
  AOS.init();

  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDefault, setShowDefault] = useState(true);
  useEffect(() => {
    if (showDefault) {
      // Fetch default 10 toys
      fetch("http://localhost:5000/toys")
        .then((response) => response.json())
        .then((data) => {
          const defaultToys = data.slice(0, 9); // Slice the first 9 toys
          setToys(defaultToys);
        });
    }
  }, [showDefault]);
  const handleSearch = () => {
    fetch(`http://localhost:5000/toys?searchTerm=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setShowDefault(false);
      });
  };

  const handleSearchKey = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setSearchTerm("");
    }
  };

  return (
    <>
      <div className="container flex flex-col items-center mb-5 mt-14 mx-auto ">
        <div className="relative" data-aos="zoom-in">
          <span className="absolute mt-4 flex items-center pl-2 mx-auto">
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-4 h-4 text-gray-900"
            >
              <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
            </svg>
          </span>
          <input
            onKeyDown={(event) => handleSearchKey(event)}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full sm:w-96 py-3 pl-12 text-sm rounded-full  focus:outline-none bg-gray-200 text-gray-800 focus:bg-gray-300"
          />
          <hr className="w-full h-1 mx-auto  bg-gray-100 border-0 rounded mt-3 dark:bg-orange-700" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:pt-9" data-aos="fade-up">
        {showDefault ? (
          // Render default results
          toys.map((toy) => <ToysCard key={toy._id} toy={toy} />)
        ) : toys.length === 0 ? (
          // Render no results message
          <p>No toys found for the search term.</p>
        ) : (
          // Render search results
          toys.map((toy) => <ToysCard key={toy._id} toy={toy} />)
        )}
      </div>
    </>
  );
};

export default AllToys;

// import React, { useState } from "react";
// import ToysCard from "./ToysCard";
// import AOS from "aos";
// const AllToys = () => {
//   AOS.init();

//   const [toys, setToys] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const handleSearch = () => {
//     fetch(`http://localhost:5000/toys?searchTerm=${searchTerm}`)
//       .then((response) => response.json())
//       .then((data) => setToys(data));
//   };

//   const handleSearchKey = (event) => {
//     {
//       if (event.key === "Enter") {
//         handleSearch();
//         setSearchTerm("");
//       }
//     }
//   };

//   return (
//     <>

//       <div className="grid md:grid-cols-3 my-container">
//         {toys.map((toy) => (
//           <ToysCard key={toy._id} toy={toy}></ToysCard>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AllToys;
