import React, { useEffect, useState } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { FaAngleRight, FaDollarSign } from "react-icons/fa";
import useTitle from "../../../Hooks/useTitle";




const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
    </div>
  );
};

const AllToys = () => {

useTitle("All Toys");


  AOS.init();

  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(12);
  const [showDefault, setShowDefault] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (showDefault) {
      // Fetch default toys
      setLoading(true);
      fetch("https://toys-market-place-server-one.vercel.app/toys")
        .then((response) => response.json())
        .then((data) => {
          setToys(data);
          setLoading(false);
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

    setLoading(true);
    fetch(`https://toys-market-place-server-one.vercel.app/toys?searchTerm=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setShowDefault(false);
        setCurrentPage(1);
        setLoading(false);
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
              <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
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
        {loading ? (
          <Spinner />
        ) : (
          <div className="overflow-x-auto">
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
                      <td className="border px-4 py-2 text-center">
                        {toy.name}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <p className="flex items-center justify-center">
                          {toy.price}{" "}
                          <FaDollarSign className="text-green-500" />
                        </p>
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {toy.quantity}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {toy.category}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <Link to={`/toys/${toy._id}`} className="my-btn">
                          View <FaAngleRight className="ml-2" />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : toys.length === 0 ? (
                  <tr>
                    <td
                      className="px-4 py-10 text-center text-primary font-bold"
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
                      <td className="border px-4 py-2 text-center">
                        {toy.postedBy}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {toy.name}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <p className="flex items-center justify-center">
                          {toy.price}{" "}
                          <FaDollarSign className="text-green-500" />
                        </p>
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {toy.quantity}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {toy.category}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <Link to={`/toys/${toy._id}`} className="my-btn">
                          View <FaAngleRight className="ml-2" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

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
    </>
  );
};

export default AllToys;
