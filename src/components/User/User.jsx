import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { userId } = useParams();
  return (
    <div>
      <h1 className="bg-gray-500 p-4 text-center text-4xl">User : {userId} </h1>
    </div>
  );
};

export default User;
