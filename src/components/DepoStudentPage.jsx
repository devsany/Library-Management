import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Depo from "./Depo";
import DetailOfBook from "../localcomponent/DetailOfBook";
import InputStudentDepo from "../localcomponent/InputStudentDepo";
import Loding from "./Loding";

const DepoStudentPage = () => {
  const { id } = useParams();
  const [depoStudent, setDepostudent] = useState();
  const [authorName, setAuthorName] = useState();
  const [booktitle, setBooktitle] = useState();
  const [PublisherYear, setPublisherYear] = useState();
  const [page, setPage] = useState();
  const [cost, setCost] = useState();
  const [quantity, setQuantity] = useState();
  const [isLoading, setLoading] = useState(true);

  const DepoApiStu = async () => {
    const data = await fetch(
      `https://6682b6704102471fa4c7f401.mockapi.io/librarymain/${id}`
    );
    const res = await data.json();

    setDepostudent(res.id);
    setAuthorName(res.authorName);
    setBooktitle(res.booktitle);
    setPublisherYear(res.PublisherYear);
    setPage(res.page);
    setCost(res.cost);
    setQuantity(res.quantity);
    // console.log(res);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    DepoApiStu();
  }, []);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <div className="container1  pt-[9%] ">
        <h1 className="text-center   mx-48 text-slate-800 md:text-4xl sm:border-x-8 border sm:border-y-0 md:border-x-8 md:border-y-0 border text-purple-800">
          Depo To Student
        </h1>
        <DetailOfBook
          booktitle={booktitle}
          authorName={authorName}
          title={depoStudent}
          PublisherYear={PublisherYear}
          page={page}
          cost={cost}
          quantity={quantity}
        />
        <InputStudentDepo
          authorName={authorName}
          quantity={quantity}
          cost={cost}
          title={depoStudent}
        />
      </div>
    </div>
  );
};

export default DepoStudentPage;
