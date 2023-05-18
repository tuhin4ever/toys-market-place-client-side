import {  FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button  className="w-72 btn btn-outline">
          <FaGoogle
           className="m-2" /> Google Sign-in
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
