import React from "react";
import "./Feedback.css"

const Feedback = (props) => {
  return (
    <div>
      <div className="container">
        <h2 className="title">Please leave feedback</h2>
        <button className="button" onClick={() => props.onFeedback("good")}>Good</button>
        <button className="button" onClick={() => props.onFeedback("neutral")}>Neutral</button>
        <button className="button" onClick={() => props.onFeedback("bad")}>Bad</button>
      </div>
      <div className="container ">
        <h3 className="title">Statistics</h3>
        <p>Good: {props.data.good}</p>
        <p>Neutral: {props.data.neutral}</p>
        <p>Bad: {props.data.bad}</p>

        <p>Total: {props.total()}</p>
        <p>Positive Feedback: {props.positive}</p>
      </div>
    </div>
  );
};

export default Feedback;
