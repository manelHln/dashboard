// import React, { useState, useEffect } from "react";
import { projects } from "../dummyData";
// import fetchData from "../config/fetch";
import Table from "../components/table/table";

const headers = ["Created_at", "User Email", "Project Name", "Thumbnail"];

function Project() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     const data = await fetchData("https://example.com/api/data");
  //     setData(data);
  //   }

  //   getData();
  // }, []);
  return (
    <div style={{ width: "100%" }} className="p-3">
      <div className="page-header row no-gutters py-4">
        <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
          <span className="text-uppercase page-subtitle">Overview</span>
          <h3 className="page-title">Overall Projects List</h3>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <Table headers={headers} data={projects} title={"Projects"} />
        </div>
      </div>
    </div>
  );
}

export default Project;
