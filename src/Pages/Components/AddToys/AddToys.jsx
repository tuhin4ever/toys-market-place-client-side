import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import AOS from "aos";
import Swal from "sweetalert2";
import useTitle from "../../../Hooks/useTitle";

const AddToys = () => {
  useTitle("Add Toys");

  AOS.init();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/toys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.insertedId) {
        Swal.fire({
          title: "Product Added",
          text: "The product has been added successfully.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });

        reset(); // Reset the form fields
      }

      console.log(result);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while adding the product.",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setLoading(false);
    }

    console.log(data);
  };

  return (
    <div className="w-9/12 text-center mx-auto border-2 border-primary rounded p-5 mt-10 shadow-xl">
      <h1 className="text-3xl font-bold text-center" data-aos="fade-up">
        Add A Toy
      </h1>
      <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 rounded mt-3 mb-8 dark:bg-orange-700" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-3 m-1 border-2 w-2/6 rounded-lg"
          defaultValue={user.displayName}
          {...register("postedBy")}
        />
        <input
          className="p-3 m-1 border-2 w-2/6 rounded-lg"
          defaultValue={user.email}
          {...register("email")}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6 rounded-lg"
          placeholder="Toy Name"
          {...register("name")}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6 rounded-lg"
          placeholder="Picture URL"
          {...register("picture_url")}
        />
        <div className="text-center">
          <select
            required
            className="p-3 m-1 border-2 w-1/2 rounded-lg"
            defaultValue=""
            {...register("category")}
          >
            <option disabled value="">
              Select Category
            </option>
            <option value="Toy Cars">Toy Cars</option>
            <option value="Action Figures Toys">Action Figures Toys</option>
            <option value="Animal Toys">Animal Toys</option>
            <option value="Sports Toys">Sports Toys</option>
            <option value="Toy Robots">Toy Robots</option>
            <option value="Dolls">Dolls</option>
            <option value="Girls">Girls</option>
            <option value="Video Game Toys">Video Game Toys</option>
            <option value="Building And Construction Toys">
              Building And Construction Toys
            </option>
            <option value="Educational and Learning Toys">
              Educational and Learning Toys
            </option>
            <option value="Cooking Toys">Cooking Toys</option>
            <option value="Arts and Crafts Toys">Arts and Crafts Toys</option>
            <option value="Musical Toys">Musical Toys</option>
            <option value="Board Games and Puzzles">
              Board Games and Puzzles
            </option>
            <option value="Electronic Toys">Electronic Toys</option>
            <option value="Lego sets">Lego sets</option>
            <option value="Sand castle building toys">
              Sand Castle Building Toys
            </option>
            <option value="Other Types Of Toys">Other Types Of Toys</option>
          </select>
        </div>
        <input
          required
          className="p-3 m-1 border-2 w-2/6 rounded-full"
          placeholder="Price"
          type="number"
          step="0.01"
          {...register("price")}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6 rounded-full"
          placeholder="Rating"
          type="number"
          step="0.1"
          {...register("rating")}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6 rounded-full"
          placeholder="Quantity"
          type="number"
          pattern="[1-9][0-9]*" // Pattern to allow whole numbers only
          {...register("quantity")}
        />
        <textarea
          required
          className="p-3 m-1 border-2 w-4/6 rounded-xl"
          placeholder="Description"
          {...register("description")}
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}

        <button
          className="btn bg-primary text-bold hover:bg-purple-700 text-white w-5/12 mt-5"
          type="submit"
          disabled={loading}
        >
          {loading ? "Adding..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddToys;
