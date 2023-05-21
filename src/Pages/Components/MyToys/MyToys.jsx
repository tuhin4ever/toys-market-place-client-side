import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteToys/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount) {
              const remainingToys = toys.filter((toy) => toy._id !== id);
              setToys(remainingToys);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleSortByPrice = async (sortOrder) => {
    try {
      const response = await fetch(
        `http://localhost:5000/myToys/${user?.email}/sortByPrice/${sortOrder}`
      );
      const data = await response.json();
      setToys(data);
    } catch (error) {
      console.error("Error sorting toys:", error);
    }
  };

  return (
    <div className="w-9/12 mx-auto mt-10">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Name</th>
              <th className="text-center">Category</th>
              <th className="text-center">
                Price
                <div className="flex justify-evenly items-center">
                  <button
                    className="sort-button text-xl text-primary"
                    onClick={() => handleSortByPrice("asc")}
                  >
                    ↑
                  </button>
                  <button
                    className="sort-button text-xl text-primary"
                    onClick={() => handleSortByPrice("desc")}
                  >
                    ↓
                  </button>
                </div>
              </th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Update</th>
              <th className="text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{toy.name}</td>
                <td className="text-center">{toy.category}</td>
                <td className="text-center">{toy.price}</td>
                <td className="text-center">{toy.quantity}</td>
                <td className="text-center">
                  <Link to={`/update-toy/${toy._id}`} className="my-btn">
                    Edit
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="my-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
