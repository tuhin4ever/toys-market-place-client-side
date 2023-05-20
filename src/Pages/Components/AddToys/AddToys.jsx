import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import AOS from "aos";
const AddToys = () => {
  AOS.init();
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/toys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.insertedId) {
        alert("Successfully Added");
      }

      console.log(result);
    } catch (error) {
      console.error(error);
    }

    console.log(data);
  };

  return (
    <div className="w-9/12 text-center mx-auto border-2 border-primary rounded p-5 mt-10 shadow-xl">
      <h1 className="text-3xl font-bold text-center" data-aos="fade-up">
        Add A Toys
      </h1>
      <hr className="w-48 h-1 mx-auto  bg-gray-100 border-0 rounded mt-3 mb-8 dark:bg-orange-700" />
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
          defaultValue={"Red Racer"}
        />
        <input
          required
          className="p-3 m-1 border-2 w-2/6 rounded-lg"
          placeholder="Picture URL"
          {...register("picture_url")}
          defaultValue="https://i.ibb.co/VSPjdMc/red-racer.jpg"
        />
        <div className="text-center">
          
          <select
            required
            className="p-3 m-1 border-2 w-1/2 rounded-lg"
            {...register("category")}
          >
            <option disabled value="">
            Category
            </option>
            <option value="Toy-Cars">Toy-Cars</option>
            <option value="Action-Figures">Action-Figures</option>
            <option value="Animal-Toys">Animal-Toys</option>
            <option value="Dolls">Dolls</option>
            <option value="Girls-Makeup">Girls-Makeup</option>
            <option value="Cooking-Toys">Cooking-Toys</option>
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
          defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}

        <button className="btn bg-primary w-5/12 mt-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToys;
