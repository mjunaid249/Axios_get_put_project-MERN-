import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <main className="bg-green-200 h-screen flex items-center justify-start flex-col">
      <div className="bg-slate-100 flex items-center justify-center gap-10 p-4 mt-20 min-h-[20rem] flex-col min-w-[20rem] rounded-xl">
        <h1 className="text-3xl font-bold">Your Admin Pannel</h1>
        <div className="btns flex items-center justify-center gap-3 ">
          <Link
            to={"/add"}
            className="bg-green-500 text-xl p-2 text-white font-bold rounded-lg hover:bg-green-400 transition duration-200"
          >
            Add New{" "}
          </Link>
          <Link
            to={"/get"}
            className="bg-blue-500 text-xl p-2 text-white font-bold rounded-lg hover:bg-blue-400 transition duration-200"
          >
            View All Users
          </Link>
        </div>
      </div>
    </main>
  );
}
