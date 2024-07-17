import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViweStudentList = () => {
  const nav = useNavigate();
  const [student, setStudent] = useState([]);
  const [qtns, setQtn] = useState();
  const [tile, setTile] = useState();

  const data = async () => {
    const res = await fetch(
      "https://6682b6704102471fa4c7f401.mockapi.io/depoStudent"
    );
    const result = await res.json();
    setStudent(result);
    setQtn(result.qtn);
    setTile(result.title);
    console.log(result);
  };

  const deleteStudentBook = (id) => {
    axios
      .delete(`https://6682b6704102471fa4c7f401.mockapi.io/depoStudent/${id}`)
      .then(data());
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      <h1 className="text-center  pt-[9%]  mx-52 text-slate-800 md:text-4xl sm:border-x-8 border sm:border-y-0 md:border-x-8 md:border-y-0 border text-purple-800">
        Depo Student List
      </h1>
      {student && (
        <div className="container">
          <div className="table ">
            <table className="w-[100vw] mt-9 text-center">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name of Student</th>
                  <th>Class </th>
                  <th>Roll</th>
                  <th>Section</th>
                  <th>Book Name</th>
                  <th>Price of Book</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {student.map((e) => {
                  return (
                    <>
                      <tr className="odd:bg-white  even:bg-slate-200">
                        <td>{e.id}</td>
                        <td>{e.stuName}</td>
                        <td>{e.stuClass}</td>
                        <td>{e.stuRoll}</td>
                        <td>{e.stuSection}</td>
                        <td>{e.authorName}</td>
                        <td>{e.bookCost}</td>
                        <td>
                          <div className="button  justify-center ">
                            <button
                              className="border shadow-slate bg-red-900 text-white px-2 border-slate-500 "
                              onClick={() => {
                                deleteStudentBook(e.id);
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
          </div>
        </div>
      )}
    </div>
  );
};

export default ViweStudentList;
