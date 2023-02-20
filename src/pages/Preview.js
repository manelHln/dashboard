// import React, {useState, useEffect} from "react";
// import fetchData from "../config/fetch";
import ImageCard from "../components/card/ImageCard";
import { projectPreview } from "../dummyData";

const Preview = () => {
  // const [data, setData] = useState(null)

  // useEffect(() => {
  //   async function getData() {
  //     const data = await fetchData('https://example.com/api/data');
  //     setData(data);
  //   }

  //   getData();
  // }, []);
  return (
    <div style={{ width: "100%" }} className="p-3">
      <div className="page-header row no-gutters py-4">
        <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
          <span className="text-uppercase page-subtitle">Overview</span>
          <h3 className="page-title">Preview Projects</h3>
        </div>
      </div>
      <div className="row">
        <ImageCard data={projectPreview} />
      </div>
      <div>
      </div>
    </div>
  );
};

export default Preview;
