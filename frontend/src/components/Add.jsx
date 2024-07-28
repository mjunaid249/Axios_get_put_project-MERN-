import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Add() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const postData = async () => {
    try {
      await axios.post("http://localhost:3000/add", { name, age });

      setName("");
      setAge("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="bg-green-200 h-screen flex items-center justify-start flex-col">
      <Link
        to={"/"}
        className="absolute top-0 left-0 m-4 bg-black text-white p-2 rounded-lg font-semibold"
      >
        Back to Home{" "}
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postData();
        }}
        className="bg-slate-100 flex items-center justify-center gap-10 p-8 mt-20 min-h-[20rem] flex-col min-w-[20rem] rounded-xl"
      >
        <h1 className="font-bold text-3xl">Add User</h1>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Name"
          autoComplete="off"
          autoFocus
          className="p-2 rounded-xl outline-none border-2 border-gray-300"
          required
        />
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          autoComplete="off"
          className="p-2 rounded-xl outline-none border-2 border-gray-300"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-xl p-2 text-white font-semibold rounded-lg hover:bg-green-400 transition duration-200"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
