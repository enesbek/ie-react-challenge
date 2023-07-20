import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-center mt-6 text-2xl gap-10 items-center border-b-4 border-indigo-500 pb-2">
      <div>
        <Link to="/">Posts</Link>
      </div>
      /
      <div>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};
