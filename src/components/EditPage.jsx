import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const [dates, setDate] = useState();
  const [accession, setAssession] = useState();
  const [authorName, setAuthorName] = useState();
  const [booktitle, setBooktitle] = useState();
  const [PublisherYear, setPublisherYear] = useState();
  const [page, setPage] = useState();
  const [cost, setCost] = useState();
  const [quantity, setQuantity] = useState();

  const ApiData = async () => {
    const res = await fetch(
      `https://6682b6704102471fa4c7f401.mockapi.io/librarymain/${id}`
    );
    const data = await res.json();
    console.log(data);
    setDate(data.dates);
    setAssession(data.accession);
    setAuthorName(data.authorName);
    setBooktitle(data.booktitle);
    setPublisherYear(data.PublisherYear);
    setPage(data.page);
    setCost(data.cost);
    setQuantity(data.quantity);
  };
  const updateBookList = () => {
    axios
      .put(`https://6682b6704102471fa4c7f401.mockapi.io/librarymain/${id}`, {
        accession: accession,
        authorName: authorName,
        booktitle: booktitle,
        PublisherYear: PublisherYear,
        page: page,
        cost: cost,
        quantity: quantity,
      })
      .then(() => {
        nav("/viewbook");
      });
  };

  useEffect(() => {
    ApiData();
  }, []);
  return (
    <div>
      <div className="container  pt-[9%] ">
        <h1 className="text-center  mx-52 text-slate-800 md:text-4xl sm:border-x-8 border sm:border-y-0 md:border-x-8 md:border-y-0 border text-purple-800">
          Edit Page
        </h1>
        {/* {dates} */}
        <div className="row px-3 py-3 w-[100vw]  md:grid md:grid-cols-2 gap-4">
          <div className="col  m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
            <div className="title">Date:-{dates}</div>
          </div>
          <div className="col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e] ">
            <div className="title   text-gray-700 ">Accession No.</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Enter Assession Number"
              name="assession"
              value={accession}
              onChange={(e) => {
                setAssession(e.target.value);
              }}
            />
          </div>
          <div className="col col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700 ">Author Name</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="text"
              placeholder="Enter Author Name"
              name="authorName"
              value={authorName}
              onChange={(e) => {
                setAuthorName(e.target.value);
              }}
            />
          </div>
          <div className="col col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700 ">Title of Book</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="text"
              placeholder="Enter Title of Book"
              name="booktitle"
              value={booktitle}
              onChange={(e) => {
                setBooktitle(e.target.value);
              }}
            />
          </div>
          <div className="col col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700 ">Publisher, Flace Year</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Enter Publisher, Flace Year"
              name="PublisherYear"
              value={PublisherYear}
              onChange={(e) => {
                setPublisherYear(e.target.value);
              }}
            />
          </div>
          <div className="col col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700 ">Number of page of Book</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Enter Number of page of Book"
              name="page"
              value={page}
              onChange={(e) => {
                setPage(e.target.value);
              }}
            />
          </div>
          <div className="col col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700 ">Cost of Book in Rupee</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Enter Cost of Book in Rupee"
              name="cost"
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </div>
          <div className="col col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700 ">Quentity of Book</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Q"
              name="quantity"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="update row px-3 py-3 w-[100vw]  md:grid md:grid-cols-4 gap-4">
          <div className="button  justify-center ">
            <button
              className="border text-xl py-1 px-3 shadow-slate bg-blue-900 text-white px-2 border-slate-500 "
              onClick={updateBookList}
            >
              Update
            </button>
          </div>
          <div className="button  justify-center ">
            <Link
              className="border text-xl py-1 px-3 shadow-slate bg-orange-900 text-white px-2 border-slate-500 "
              to="/addbook"
            >
              Add More Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
