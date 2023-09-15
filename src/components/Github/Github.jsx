import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/priyanshu102002")
//       .then((resp) => resp.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

  return (
    <div className="bg-gray-700 text-white  p-4 flex justify-center items-center gap-52">
      <div>
        <img className="rounded-full" src={data.avatar_url} alt="" />
      </div>
      <div className="flex flex-col gap-5 text-xl">
        <h1>UserName : {data.name}</h1>
        <h2>GitHub followers : {data.followers}</h2>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
    const resp = await fetch("https://api.github.com/users/priyanshu102002");
    return resp.json();
}
