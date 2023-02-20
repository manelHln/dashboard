import React, { useState } from "react";
import Thumbnail from "../image-thumbnail/Thumbnail";
import Pagination from "../pagination/Pagination";
import "./table.css";
const Table = (props) => {
  const { headers, data, title, itemsPerPage = 10 } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="row">
      <div className=" col">
        <div className="custom-card custom-card-small mb-4">
          <div className="custom-card-header border-bottom">
            <h6 className="m-0">{title}</h6>
          </div>
          <div className="custom-card-body p-0 pb-3">
            <table className="table mb-0">
              <thead className="light-bg">
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} className="border-0">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, index) => (
                  <tr key={index}>
                    {Object.keys(row).map((key, index) =>
                      key === "url" ? (
                        <Thumbnail url={row[key]} />
                      ) : (
                        <td key={index} className="gray-text align-middle">
                          {row[key]}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="custom-card-footer d-flex justify-content-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
