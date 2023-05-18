import { Link } from "react-router-dom";
import reader from "../../assets/render.json";
import Lottie from "lottie-react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const { singIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    singIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        Swal.fire({
          title: "Welcome To Play Go !",
          text: `${loggedUser.displayName} ✨`,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.code);
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
            <h1 className="text-3xl text-center font-bold">Sing In</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Don't Have an Account ?{" "}
              <Link className="text-info font-semibold" to="/register">
                {" "}
                Sing Up
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
