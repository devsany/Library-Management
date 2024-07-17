import React from "react";
import "../App.css";

const DescriptionLib = () => {
  return (
    <div>
      <h1 className="text-center mb-10 mt-10 mx-52 text-red-800 md:text-4xl sm:border-x-8 border sm:border-y-0 md:border-x-8 md:border-y-0 border text-purple-800">
        Description of Library Management
      </h1>
      <div className="dis grid text-center md:grid-cols-3  ">
        <div className="dis1 shadow-xl rounded-md border border-blue-400 m-4">
          <h2 className="text-center mt-2 mb-2 mx-12 text-blue-600 md:text-3xl sm:border-x-3 border sm:border-y-0 md:border-x-2 md:border-y-0 border text-purple-800">
            About Library
          </h2>
          <div className="dis1-discription pl-6 pr-6 pt-2 pb-2 text-1xl">
            This Web application is useful for manage your Library. You can
            manage your Book, View Book List, Depo, List of Depo and Many more
            <span style={{ color: "red" }}> Click Here </span> to Learn This
            Application for use
          </div>
          <hr />
        </div>
        <div className="dis2 shadow-xl rounded-md  border border-blue-400 m-4">
          <h2 className="text-center mt-2 mb-2 mx-12 text-green-600 md:text-3xl sm:border-x-3 border sm:border-y-0 md:border-x-2 md:border-y-0 border text-purple-800">
            How it Work
          </h2>
          <div className="dis1-discription  pl-6 pr-6 pt-2 pb-2 text-1xl">
            It's too easy to work with this appication you can see all data
            which in coming from API and you may also manuplate them
            <span style={{ color: "red" }}> Click Here </span>
            to know more about How this application Work
          </div>
        </div>
        <div className="dis3 shadow-xl rounded-md border border-blue-400 m-4">
          <h2 className="text-center mt-2 mb-2 mx-12 text-orange-600 md:text-3xl sm:border-x-3 border sm:border-y-0 md:border-x-2 md:border-y-0 border text-purple-800">
            Subscription Plan
          </h2>
          <div className="dis1-discription pl-6 text-green-950 pr-6 pt-2 pb-2 text-5xl">
            Free
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionLib;
