import React, { useContext } from "react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";
import reader from "../../assets/readerSungUp.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../Providers/AuthProvider";
const Register = () => {
  const { createUser, updateUserProfile, setReload } = useContext(AuthContext);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          updateUserProfile({
            displayName,
            photoURL,
          }).then(() => {
            setReload(new Date().getTime());
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="mr-12  w-1/2">
          <Lottie animationData={reader} loop={true} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sing Up</h1>
            <form onSubmit={handleSingUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  required
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sing Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account !{" "}
              <Link className="text-info font-semibold" to="/login">
                Sing In
              </Link>{" "}
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
