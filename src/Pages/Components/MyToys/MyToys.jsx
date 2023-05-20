import React, { useContext } from "react";
import { useEffect, useState } from "react";

import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>
                Price
                <div className="flex justify-evenly items-center -ms-5">
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
              <th>Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr key={toy._id}>
                <th>{index + 1}</th>
                <td>{toy.name}</td>
                <td>{toy.category}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  {/* The button to open modal */}
                  <label htmlFor="my-modal-6" className="btn btn-accent">
                    Edit
                  </label>
                  <button></button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn btn-error"
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
