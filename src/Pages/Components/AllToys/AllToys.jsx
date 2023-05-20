import React, { useEffect, useState } from "react";
import AOS from "aos";
import PrivateRoute from "../../../Routers/PrivateRoute";

const AllToys = () => {
  AOS.init();

  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const [showDefault, setShowDefault] = useState(true);

  useEffect(() => {
    if (showDefault) {
      // Fetch default toys
      fetch("http://localhost:5000/toys")
        .then((response) => response.json())
        .then((data) => {
          setToys(data);
        });
    }
  }, [showDefault]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500); // Delay the search by 500ms after typing
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      // If search term is empty, show default results
      setShowDefault(true);
      setCurrentPage(1);
      return;
    }

    fetch(`http://localhost:5000/toys?searchTerm=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setShowDefault(false);
        setCurrentPage(1);
      });
  };

  // Pagination
  const indexOfLastToy = currentPage * perPage;
  const indexOfFirstToy = indexOfLastToy - perPage;
  const currentToys = toys.slice(indexOfFirstToy, indexOfLastToy);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container flex flex-col items-center mb-5 mt-14 mx-auto">
        <div className="relative" data-aos="zoom-in">
          <span className="absolute mt-4 flex items-center pl-2 mx-auto">
            <svg
              fill="currentColor"
              viewBox="0 0 512 512"
              className="w-4 h-4 text-gray-900"
            >
              {/* SVG path code */}
            </svg>
          </span>
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full sm:w-96 py-3 pl-12 text-sm rounded-full focus:outline-none bg-gray-200 text-gray-800 focus:bg-gray-300"
          />
        </div>
      </div>

      <div className="container mx-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Seller</th>
              <th className="px-4 py-2">Toy Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Available Quantity</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {showDefault ? (
              currentToys.map((toy) => (
                <tr key={toy._id}>
                  <td className="border py-2">
                    <img
                      src={toy.picture_url}
                      alt={toy.name}
                      className="w-24 rounded-xl mx-auto h-16 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {toy.postedBy}
                  </td>
                  <td className="border px-4 py-2 text-center">{toy.name}</td>
                  <td className="border px-4 py-2 text-center">
                    {toy.price} $
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {toy.quantity}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {toy.category}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <label htmlFor="my-modal-6" className="my-btn">
                      View »
                    </label>
                  </td>
                </tr>
              ))
            ) : toys.length === 0 ? (
              <tr>
                <td
                  className=" px-4 py-10 text-center text-primary font-bold"
                  colSpan="7"
                >
                  No toys found for the search term....🔎
                </td>
              </tr>
            ) : (
              currentToys.map((toy) => (
                <tr key={toy._id}>
                  <td className="border px-4 py-2">
                    <img
                      src={toy.picture_url}
                      alt={toy.name}
                      className="w-24 rounded-xl mx-auto h-16 object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">{toy.name}</td>
                  <td className="border px-4 py-2 text-center">
                    {toy.postedBy}
                  </td>

                  <td className="border px-4 py-2 text-center">
                    {toy.price} $
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {toy.quantity}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    {toy.quantity}
                  </td>
                  <td className="border px-4 py-2 text-center">
                    <label htmlFor="my-modal-6" className="my-btn">
                      View »
                    </label>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {/* Pagination */}
        {toys.length > perPage && (
          <div className="flex justify-center mt-4 mb-5">
            <div className="btn-group">
              <button
                className="btn"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                «
              </button>
              {Array.from({ length: Math.ceil(toys.length / perPage) }).map(
                (_, index) => (
                  <button
                    key={index}
                    className={`btn ${
                      currentPage === index + 1 ? "btn-active" : ""
                    }`}
                    onClick={() => paginate(index + 1)}
                  >
                    Page {index + 1}
                  </button>
                )
              )}
              <button
                className="btn"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(toys.length / perPage)}
              >
                »
              </button>
            </div>
          </div>
        )}
      </div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <PrivateRoute>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label
              htmlFor="my-modal-6"
              className="btn btn-ghost btn-square modal-close absolute top-2 right-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <img
              src={toys.picture_url}
              alt="Image"
              className="my-modal-image"
            />
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </>
  );
};

export default AllToys;
