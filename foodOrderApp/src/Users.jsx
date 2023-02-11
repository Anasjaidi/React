import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  useEffect(() => {
    console.log("first");
    return () => {
      console.log("second");
    };
  }, []);
  return (
    <div>
      <Link to="/">link.......</Link>
    </div>
  );
};

export default Users;
