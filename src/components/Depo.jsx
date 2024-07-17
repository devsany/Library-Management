import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loding from "./Loding";

const Depo = () => {
  const [dipoApi, setDepoApi] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const Data = async () => {
    const data = await fetch(
      "https://6682b6704102471fa4c7f401.mockapi.io/librarymain"
    );
    const res = await data.json();
    setDepoApi(res);
    setFilter(res);
  };
  const handleFilter = (e) => {
    setFilter(
      dipoApi.filter((f) => f.authorName.toLowerCase().includes(e.target.value))
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    Data();
  }, []);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <h1 className="text-center  pt-[9%]  mx-52 text-red-800 md:text-4xl sm:border-x-8 border sm:border-y-0 md:border-x-8 md:border-y-0 border text-purple-800">
        Book Allocate
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
      <div className="container md:grid md:grid-cols-3 m-4 border ">
        {filter.map((i) => {
          return (
            <>
              <div className="section text-xl px-3 py-4 border border-black ">
                <div className="container">
                  <div className="depo grid grid-rows-1 border-slate-500">
                    <span className="depo_flex  ">
                      {" "}
                      <i>Id:-{i.id}</i>
                    </span>

                    <span className="depo_flex"> Date:-{i.date} </span>
                    <span className="depo_flex">Accession:- {i.accession}</span>
                    <span className="depo_flex">
                      Author Name:- {i.authorName}
                    </span>
                    <span className="depo_flex">
                      Book Title:- {i.booktitle}
                    </span>

                    <span className="depo_flex"> Cost of Book :- {i.cost}</span>
                    <span className="depo_flex">
                      Book Quantity:- {i.quantity}
                    </span>
                  </div>
                </div>
                <div className="depo h-[47px]  ">
                  <div className="button float-end mr-2">
                    <Link to={`/depo/${i.id}`}>
                      <button className="   border-spacing-6 bg-sky-600 px-4 py-2  hover:border-x-fuchsia-400 hover:bg-sky-950 text-cyan-50 border rounded-3xl">
                        Deposit to Student
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Depo;
