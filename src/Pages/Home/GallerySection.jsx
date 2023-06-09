import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

const GallerySection = () => {
  AOS.init();
  const [images, setImages] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const defaultPhotoCount = 6;
  const totalPhotoCount = 12;

  useEffect(() => {
    fetch("https://toys-market-place-server-one.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setIsLoading(false);
      });
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const displayedImages = showAll
    ? images.slice(0, totalPhotoCount)
    : images.slice(0, defaultPhotoCount);

  return (
    <section className="bg-gray-100">
      <div className="my-container mx-auto">
        <h1 className="text-3xl font-bold text-center" data-aos="fade-up">
          Toys Gallery
        </h1>
        <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded mt-3 mb-8 dark:bg-orange-700" />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
            {displayedImages.map((image) => (
              <div
                key={image._id}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={image.picture_url}
                  className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:scale-105"
                  alt={image.name}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500 ease-in-out bg-black bg-opacity-50">
                  <div className="text-center">
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {image.name}
                    </h3>
                    <Rating
                      className="mx-auto"
                      style={{ maxWidth: 150 }}
                      value={image.rating}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {!showAll && images.length > defaultPhotoCount && (
          <div className="flex justify-center mt-4">
            <button className="my-btn" onClick={handleShowAll}>
              Show All
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
