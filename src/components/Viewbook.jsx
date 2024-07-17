import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loding from "./Loding";

const Viewbook = () => {
  const [booklist, setBooklist] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const BookApi = async () => {
    const data = await fetch(
      "https://6682b6704102471fa4c7f401.mockapi.io/librarymain"
    );
    const booklistApi = await data.json();
    console.log(booklistApi);
    setBooklist(booklistApi);
    setFilter(booklistApi);
  };
  const deleteBook = (id) => {
    axios
      .delete(`https://6682b6704102471fa4c7f401.mockapi.io/librarymain/${id}`)
      .then(() => {
        BookApi();
      });
  };
  const handleFilter = (e) => {
    setFilter(
      booklist.filter((f) =>
        f.authorName.toLowerCase().includes(e.target.value)
      )
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    BookApi();
  }, []);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <>
      <h1 className="text-center  pt-[9%] mx-52 text-slate-800 md:text-4xl sm:border-x-8 border sm:border-y-0 md:border-x-8 md:border-y-0 border text-purple-800">
        List of all book
      </h1>
      <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
        <div className="title   text-gray-700">Search Book:</div>

        <input
          className="border-slate-600 border  px-2 rounded-md hover:bg-zinc-100  cursor-text"
          type="text"
          placeholder="Enter book name for filter"
          onChange={handleFilter}
        />
      </div>
      <table className="w-[100vw]  border text-center border-red border-collapse ">
        <thead className="border border-slate-600">
          <tr>
            <th className="border p-3  border-slate-600">Id</th>
            <th className="border p-3  border-slate-600">Date</th>
            <th className="border p-3  border-slate-600">Accession</th>
            <th className="border p-3  border-slate-600">Name of Author</th>
            <th className="border p-3  border-slate-600">Book Title</th>
            <th className="border p-3  border-slate-600">Publisher Year</th>
            <th className="border p-3  border-slate-600">Number of page</th>
            <th className="border p-3  border-slate-600">Book Cost</th>
            <th className="border p-3  border-slate-600">Quantity of Book</th>
            <th className="border p-3  border-slate-600">
              Total per book Price
            </th>
            <th className="border p-3  border-slate-600"> Edit Book</th>
            <th className="border p-3  border-slate-600">Delete Book</th>
          </tr>
        </thead>
        <tbody>
          {filter &&
            filter.map((i) => {
              return (
                <>
                  <tr className="odd:bg-white even:bg-slate-200">
                    <td className="p-3">{i.id}</td>
                    <td className="p-3">{i.dates}</td>
                    <td className="p-3">{i.accession}</td>
                    <td className="p-3">{i.authorName}</td>
                    <td className="p-3">{i.booktitle}</td>
                    <td className="p-3">{i.PublisherYear}</td>
                    <td className="p-3">{i.page}</td>
                    <td className="p-3">Rs {i.cost}</td>
                    <td className="p-3">{i.quantity}</td>
                    <td className="p-3">Rs {i.cost * i.quantity}</td>
                    <td>
                      <Link
                        className="border px-3 shadow-slate-500 bg-orange-500 text-white px-2 border-slate-500 "
                        to={`/edit/${i.id}`}
                      >
                        Edit
                      </Link>
                    </td>

                    <td>
                      <div className="button  justify-center ">
                        <button
                          className="border shadow-slate bg-red-900 text-white px-2 border-slate-500 "
                          onClick={() => {
                            deleteBook(i.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Viewbook;
