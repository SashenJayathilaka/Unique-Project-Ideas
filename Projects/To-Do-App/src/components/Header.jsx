import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PersonIcon from "@material-ui/icons/Person";

function Header({ userName, userPhoto, logout, speed, setIsOpen }) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-gray-900  relative flex items-center w-full justify-between">
          <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <button
                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  className="w-5"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="navbar-collapse collapse grow items-center"
              id="navbarSupportedContentY"
            >
              <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                <li className="nav-item flex">
                  <CheckCircleIcon
                    className="animate-pulse"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "auto",
                      color: "white",
                      fontSize: "30px",
                    }}
                  />
                  <a
                    className="nav-link animate-pulse block pr-2 lg:px-2 py-2 font-bold text-2xl cursor-pointer text-gray-300 hover:text-gray-400 focus:text-gray-700 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    To Do App
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <PersonIcon
            className="mr-5 cursor-pointer text-white"
            onClick={() => setIsOpen(true)}
          />
          <img
            src={
              userPhoto
                ? userPhoto
                : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
            }
            className="rounded-full w-7 mr-5 cursor-pointer"
            alt={userName}
            onClick={logout}
          />
        </nav>
      </header>
    </div>
  );
}

export default Header;
