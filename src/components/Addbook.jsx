import React, { useState } from "react";
import axios from "axios";

const Addbook = () => {
  const [dates, setDate] = useState("");
  const [accession, setAssession] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [booktitle, setBooktitle] = useState("");
  const [PublisherYear, setPublisherYear] = useState("");
  const [page, setPage] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuentity] = useState("");

  const update = (e) => {
    e.preventDefault();

    console.log("clicked");
    axios.post("https://6682b6704102471fa4c7f401.mockapi.io/librarymain ", {
      dates: dates,
      accession: accession,
      authorName: authorName,
      booktitle: booktitle,
      PublisherYear: PublisherYear,
      page: page,
      cost: cost,
      quantity: quantity,
    });
    (function updatedDate() {
      alert(
        `Book Data Update "Book Name( ${authorName} ) : Price( Rs ${cost} )`
      );
    })();
  };
  return (
    <div>
      <div className="container  pt-[8%]">
        <h1 className="text-center mx-52 text-slate-800 md:text-4xl sm:border-x-8 border sm:border-y-0 md:border-x-8 md:border-y-0 border text-purple-800">
          Add Book
        </h1>
        {dates}
        <div className="row px-3 py-3 w-[100vw]  md:grid md:grid-cols-2 gap-4">
          <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700">Date:</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="date"
              placeholder="Enter Assession Number"
              value={dates.dates}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700">Accession Number</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Enter Assession Number"
              value={accession.accession}
              onChange={(e) => {
                setAssession(e.target.value);
              }}
            />
          </div>
          <div className="col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title  text-gray-700">Author Name</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="text"
              placeholder="Enter Author Name"
              value={authorName.authorName}
              onChange={(e) => {
                setAuthorName(e.target.value);
              }}
            />
          </div>
          <div className="col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title  text-gray-700">Title of Book</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="text"
              placeholder="Enter Title of Book"
              value={booktitle.booktitle}
              onChange={(e) => {
                setBooktitle(e.target.value);
              }}
            />
          </div>
          <div className="col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700">Publisher, Flace Year</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Enter Publisher, Flace Year"
              value={PublisherYear.PublisherYear}
              onChange={(e) => {
                setPublisherYear(e.target.value);
              }}
            />
          </div>
          <div className="col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700">Number of page of Book</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Enter Number of page of Book"
              value={page.page}
              onChange={(e) => {
                setPage(e.target.value);
              }}
            />
          </div>
          <div className="col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title  text-gray-700">Cost of Book in Rupee</div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Enter Cost of Book in Rupee"
              value={cost.cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </div>
          <div className="col m-4 border border-orange  py-4 shadow-lg bg-[#50d71e]">
            <div className="title  text-gray-700">
              Number of Quantity of book
            </div>
            <input
              className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
              type="number"
              placeholder="Quentity of Book"
              value={quantity.quantity}
              onChange={(e) => {
                setQuentity(e.target.value);
              }}
            />
          </div>

          <button
            className="border bg-blue-600 col py-4 m-4 hover:text-white hover:bg-blue-950  border-slate-500 "
            onClick={update}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addbook;
