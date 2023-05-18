import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { MdOutlineToys } from "react-icons/md";

const Header = () => {
  const { user } = useContext(AuthContext);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-toys"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Blog
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/my-toys"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-toy"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Add A Toy
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar h-16 ">
      <div className="navbar-start md:ml-16">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg
               bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <h2 className="md:text-3xl font-bold text-primary flex items-center gap-2">
            <MdOutlineToys className="" /> Play Go
          </h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="items-center hidden space-x-8 lg:flex">{navItems}</ul>
      </div>
      <div className="navbar-end md:mr-16">
        <li className="flex items-center gap-5">
          {user ? (
            <div
              className="avatar tooltip tooltip-bottom tooltip-primary"
              data-tip={user.displayName}
            >
              <div className="w-9 rounded-full ring ring-primary   ">
                <img src={user.photoURL} />
              </div>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <button className="btn btn-xs btn-outline">Sing Up</button>
            </NavLink>
          )}

          {user ? (
            <button className="btn btn-xs btn-outline">Sing Out</button>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <button className="btn btn-xs btn-outline">Sing In</button>
            </NavLink>
          )}
        </li>
      </div>
    </div>
  );
};

export default Header;
{
  /* <button onClick={handleLogOut} className="btn glass">
              Logout
            </button> */
}
{
  /*
   */
}
