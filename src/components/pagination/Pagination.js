import React from "react";

const Pagination = (props) => {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      {pageNumbers.map((number) => (
        <div
          key={number}
          className={`page-item ${currentPage === number ? "active" : ""}`}
          onClick={() => handlePageClick(number)}
          role="button"
        >
          <span className="page-link">{number}</span>
        </div>
      ))}
    </>
  );
};

export default Pagination;
