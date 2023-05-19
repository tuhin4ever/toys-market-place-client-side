import React, { useState } from "react";
import AOS from "aos";
import Swal from "sweetalert2";
const AboutUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // console.log(name, email, message);

    Swal.fire({
      title: "Message submitted successfully",
      icon: "success",
      showConfirmButton: true,
      timer: 2000,
    });

    // Reset the form fields
    setName("");
    setEmail("");
    setMessage("");
  };
  AOS.init();
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div>
          <h1 className="text-3xl font-bold text-center  mt-5">About Us</h1>
          <hr className="w-48 h-1 mx-auto border-0 rounded mt-3 mb-8 bg-primary" />
          <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 space-y-5 p-4 ">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="text-center"
              >
                <h1 className="text-5xl font-bold">
                  We Bring Years of Experience and Expertise to the Toy
                  Marketplace
                </h1>
                <p className="py-6">
                  Join us at Play Go and embark on a delightful journey of play
                  and discovery. Explore our vast selection, engage with fellow
                  toy enthusiasts, and bring smiles to the faces of loved ones
                  with the perfect toys.
                </p>
                <p className="py-6">
                  Thank you for choosing Play GO as your go-to destination for
                  all things toys!
                </p>
                {/* The button to open modal */}
                <label htmlFor="my-modal-6" className="btn btn-secondary">
                  Get In Touch
                </label>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src="https://i.ibb.co/VL4sX7G/pexels-ashutosh-sonwani-1720957.jpg"
                  className="w-3/4 rounded-lg shadow-2xl"
                />
                <img
                  src="https://i.ibb.co/ZccbdXG/pexels-yan-krukau-8612932.jpg"
                  className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Put this part before </body> tag */}
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
          <div className="text-center">
            <h3 className="font-bold text-lg text-accent">Contact Us</h3>
            <p className="py-4">
              We would love to hear from you. Please feel free to reach out to
              us.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                className="input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                className="input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                required
                id="message"
                className="textarea"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="modal-action flex justify-center">
              <button type="submit" className="my-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
