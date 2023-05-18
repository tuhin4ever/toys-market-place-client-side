import { useContext } from "react";
import {  FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";


  const {singInWithGoogle} = useContext(AuthContext)
  const handleGoogleSingIn = () => {
    singInWithGoogle()
      .then((result) => {
        console.log(result.user);
        const loggedUser = result.user;
        navigate(from, { replace: true });
        Swal.fire({
          title: "Welcome To Play Go !",
          text: `${loggedUser.displayName} ✨`,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button onClick={handleGoogleSingIn} className="w-72 btn btn-outline">
          <FaGoogle
           className="m-2" /> Google Sign-in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
