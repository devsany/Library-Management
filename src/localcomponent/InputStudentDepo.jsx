import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InputStudentDepo = ({ title, quantity, authorName, cost }) => {
  const [stuName, setStuName] = useState("");
  const [stuClass, setStuClass] = useState("");
  const [stuRoll, setStuRoll] = useState("");
  const [stuSection, setStuSection] = useState("");
  const [bookauthorName, setAuthorName] = useState(authorName);
  const [costs, setCost] = useState(cost);
  const [titles, setTitle] = useState(title);
  const [qtn, setQtn] = useState(quantity);
  const [quantitys, setQuantity] = useState();

  const nav = useNavigate();

  const data = async () => {
    const main = await fetch(
      `https://6682b6704102471fa4c7f401.mockapi.io/librarymain/${title}`
    );
    const res = await main.json();
    setQuantity(res.quantity);
  };

  const SubmitData = () => {
    axios
      .post("https://6682b6704102471fa4c7f401.mockapi.io/depoStudent", {
        stuName: stuName,
        stuClass: stuClass,
        stuRoll: stuRoll,
        stuSection: stuSection,
        authorName: bookauthorName,
        bookCost: costs,
        title: titles,
        qtn: qtn,
      })
      .then(() => {
        axios.put(
          `https://6682b6704102471fa4c7f401.mockapi.io/librarymain/${title}`,
          {
            quantity: quantitys - 1,
          }
        );
        alert("thank you");
      });
    nav("/depo");
  };
  useEffect(() => {
    data();
  });
  return (
    <div>
      <div className="row px-3 py-3  w-[100vw]  md:grid md:grid-cols-2 gap-4">
        <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
          <div className="title   text-gray-700">Name of Student :</div>
          <input
            className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
            type="text"
            placeholder="Enter Name of Student"
            onChange={(e) => {
              setStuName(e.target.value);
            }}
          />
        </div>

        <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
          <div className="title   text-gray-700">Class :</div>
          <input
            className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
            type="number"
            placeholder="Enter class of Student"
            onChange={(e) => {
              setStuClass(e.target.value);
            }}
          />
        </div>
        <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
          <div className="title   text-gray-700">Roll :</div>
          <input
            className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
            type="number"
            placeholder="Enter Roll Number of Student"
            onChange={(e) => {
              setStuRoll(e.target.value);
            }}
          />
        </div>

        <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
          <div className="title   text-gray-700">Section :</div>
          <input
            className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
            type="text"
            placeholder="Enter Section of Student"
            onChange={(e) => {
              setStuSection(e.target.value);
            }}
          />
        </div>
        <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
          <div className="title   text-gray-700">Author Name :</div>
          <input
            className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
            type="text"
            placeholder=""
            name="author"
            value={authorName}
          />
        </div>
        <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
          <div className="title   text-gray-700">Price of Book:</div>
          <input
            className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
            type="number"
            placeholder=""
            name="cost"
            value={cost}
          />
        </div>
        <button
          className="border bg-blue-600 py-4 m-4 hover:text-white hover:bg-blue-950  border-slate-500 "
          onClick={SubmitData}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default InputStudentDepo;
