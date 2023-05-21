import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateDetails = () => {
  const toy = useLoaderData();
console.log(toy)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`http://localhost:5000/updateDetails/${toy._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your Toy has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={toy.picture_url}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
      <div className="bg-opacity-80 p-6 rounded relative z-10">
        <h2 className="mb-5 text-3xl text-center font-bold text-white">
          Update Your Product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <p className="text-white font-semibold">Price</p>
          <input
            required
            className="p-3 m-1 border-2 w-2/6 rounded-md"
            placeholder="Price"
            {...register("price")}
            defaultValue={toy.price}
          />
          <p className="text-white font-semibold">Quantity</p>
          <input
            required
            className="p-3 m-1 border-2 w-2/6 rounded-md"
            placeholder="Quantity"
            {...register("quantity")}
            defaultValue={toy.quantity}
          />
          <p className="text-white font-semibold">Description</p>
          <input
            required
            className="p-3 m-1 border-2 w-4/5 rounded-md"
            placeholder="Description"
            {...register("description")}
            defaultValue={toy.description}
          />
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input value="Update" className="btn btn-accent text-white font-bold mt-5" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateDetails;
