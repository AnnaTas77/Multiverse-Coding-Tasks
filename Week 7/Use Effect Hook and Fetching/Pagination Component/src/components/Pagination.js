import React, { useState, useEffect } from "react";

function Pagination({ items, pageSize }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = currentPage * pageSize;
  const itemsToDisplay = items.slice(startIndex, endIndex);

  function paginate(pageNum) {
    setCurrentPage(pageNum);
  }

  useEffect(() => {
    setTotalPages(Math.ceil(items.length / pageSize));
  }, [items, pageSize]);

  return (
    <>
      <ul>
        {itemsToDisplay.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>

      <div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {Array.from({ length: totalPages }, (nullItem, index) => {
          return (
            <button key={index} onClick={() => paginate(index + 1)}>
              {index + 1}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Pagination;
