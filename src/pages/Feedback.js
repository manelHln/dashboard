// import React, {useEffect, useState} from "react";
import FeedbackCard from "../components/card/FeedbackCard";
// import fetchData from "../config/fetch";
import { reviews } from "../dummyData";

const Feedback = () => {
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
          <h3 className="page-title">Users Feedbacks</h3>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <FeedbackCard data={reviews} />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
