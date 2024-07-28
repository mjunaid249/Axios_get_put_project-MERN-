import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Get() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:3000/");
      setUsers(response.data);
    }
    getData();
  }, []);

  return (
    <main className="bg-green-200 h-screen flex items-center justify-start flex-col">
      <Link
        to={"/"}
        className="absolute top-0 left-0 m-4 bg-black text-white p-2 rounded-lg font-semibold"
      >
        Back to Home{" "}
      </Link>

      <table className="bg-slate-100 flex items-center justify-start p-2 mt-20 min-h-[20rem] flex-col min-w-[30rem] rounded-xl">
        <thead className=" flex items-center justify-start flex-col text-center w-full p-5">
          <h1 className="font-bold text-2xl py-4">All Users</h1>
          <tr className="flex items-center justify-between gap-4 w-full">
            <th>Sr. No.</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        {users.map((user, index) => {
          return (
            <tbody className=" flex items-start justify-start flex-col text-start w-full p-5">
              <tr className="flex items-center justify-between gap-4 w-full">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </main>
  );
}
