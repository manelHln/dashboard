import React from "react";

const FeedbackCard = ({ data }) => {
  return data.map((review, index) => (
    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="custom-card custom-card-small card-post mb-4">
        <div className="custom-card-body">
          <h5 className="custom-card-title custom-card-title-sm">{review.question}</h5>
          <p className="card-text text-muted">{review.answer}</p>
        </div>
      </div>
    </div>
  ));
};

export default FeedbackCard;
