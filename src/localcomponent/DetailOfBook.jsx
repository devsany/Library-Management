import React from "react";

const DetailOfBook = ({
  booktitle,
  title,
  authorName,
  PublisherYear,
  page,
  cost,
  quantity,
}) => {
  return (
    <div>
      <div className="detailOfBook">
        <h2>
          <b>
            Current Quantity of book in Stock:
            <span className={quantity - 1 <= 2 ? "text-red-700" : "text-black"}>
              {quantity - 1}{" "}
              <span
                className={
                  quantity - 1 <= 2 ? "block text-green-500" : "hidden "
                }
              >
                out of stock
              </span>
            </span>
          </b>
        </h2>
        <table className="w-[100vw] mt-9 text-center ">
          <thead>
            <tr>
              <th>id</th>
              <th>AuthorName</th>
              <th>Booktitle</th>
              <th>PublisherYear</th>
              <th>Page</th>
              <th>Cost(Rs)</th>
            </tr>
          </thead>
          <tbody className="border border-collapse border-black">
            <tr className="border border-collapse border-black">
              <td className="border border-collapse border-black">{title}</td>
              <td className="border border-collapse border-black">
                {authorName}
              </td>
              <td className="border border-collapse border-black">
                {booktitle}
              </td>
              <td className="border border-collapse border-black">
                {PublisherYear}
              </td>
              <td className="border border-collapse border-black">{page}</td>
              <td className="border border-collapse border-black">Rs {cost}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailOfBook;
