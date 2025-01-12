// import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
// import UserContext from "../contexts/UserContext";

const Layout = () => {
  // network context for authentication purposes
  // const {User} = useContext(UserContext);

  return (
    <>
      {/* {User ? ( */}
        <>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="title text-3xl">StockSearch</Link>
          </div>
          <div className="flex justify-end">
            <Link to="/login" className="btn btn-ghost text-xl">Login</Link>
          </div>
          <div className="flex justify-end">
            <Link to="/register" className="btn btn-ghost text-xl">Register</Link>
          </div>
          <div className="flex-none gap-2">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div><Outlet />
        </>
      {/* ) : ( */}

        {/* <>
        
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="title text-3xl">StockSearch</Link>
          </div>
          <div className="flex justify-end">
            <Link to="/login" className="btn btn-ghost text-xl">Login</Link>
          </div>
          <div className="flex justify-end">
            <Link to="/register" className="btn btn-ghost text-xl">Register</Link>
          </div>
        </div><Outlet />
        </> */}
        
      {/* )} */}
    </>
  );
};

export default Layout;
