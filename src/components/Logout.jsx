import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectuser } from "../features/userslice";
import "./Logout.css";

const Logout = () => {
  const user = useSelector(selectuser);

  const Dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    Dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        Welcome <span className="user-name">{user.name}</span>
      </h1>
      <button className="logout-button" on onClick={(e) => handleLogout(e)}>
        LOG-OUT
      </button>
    </div>
  );
};

export default Logout;
