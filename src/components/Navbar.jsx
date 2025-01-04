import React from "react";
import { Link } from "react-router-dom";
import GenreModal from "./GenreModal";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 text-white flex mx-auto border-accent border-b h-24 sticky top-0 z-50 opacity-90">
      <div className="navbar-start">


        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn lg:hidden text-slate-100 bg-slate-900 border-accent border-2"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          &#9776;
        </button>
        <dialog id="my_modal_3" className="modal ">
          <div className="bg-slate-900 text-slate-100 modal-box *:">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Genres</h3>
            <div className="py-4"><GenreModal/></div>
          </div>
        </dialog>

        <Link to={`/`} className="btn btn-ghost text-secondary/95 font-extrabold text-3xl">ANIPEDIA</Link>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>ul
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
      <div className="navbar-end">
        <Link
          to="/search"
          className="btn btn-accent bg-slate-900 text-slate-100 border-accent border-2"
        >
          Search Anime
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
