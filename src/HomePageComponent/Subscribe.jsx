import React from "react";

function Subscribe() {
  return (
    <>
      <h1 className="text-center mb-5 mt-10 mx-52 text-red-800 md:text-4xl sm:border-x-8 border sm:border-y-0 md:border-x-8 md:border-y-0 border text-purple-800">
        Subscribe Us
      </h1>
      <form action="https://formspree.io/f/mnnaqlqk" method="POST">
        <div className="row px-3 py-3 w-[100vw]  md:grid md:grid-cols-3 gap-4">
          <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700"> Your email:</div>{" "}
            <label>
              <input
                className="pl-2"
                type="email"
                placeholder="Enter your Email to subscribe"
                name="email"
              />
            </label>
          </div>

          <div className="col m-4 border border-orange py-4 shadow-lg bg-[#50d71e]">
            <div className="title   text-gray-700"> Your message:</div>{" "}
            <label>
              <textarea
                name="message"
                className="w-[350px] pl-2 pt-1"
                placeholder="Enter your massage"
              ></textarea>
            </label>
          </div>

          <button
            className="border bg-blue-600 col py-4 m-4 text-4xl text-white hover:text-white hover:bg-blue-950  border-slate-500 "
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
}

export default Subscribe;
