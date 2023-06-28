import { useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [goodClicks, setGoodClicks] = useState(0);

  const handleFeedback = (type) => {
    if (type === "good") {
      setGoodClicks((prevGoodClicks) => prevGoodClicks + 1);
    }
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const feedbackValues = Object.values(feedback);
    const positiveFeedbacks = feedbackValues.filter((value) => value > 0);
    const percentage = (goodClicks / countTotalFeedback()) * 100;
    return isNaN(percentage) ? 0 : percentage.toFixed(2);
  };

  return (
    <div className="App">
      <Feedback
        onFeedback={handleFeedback}
        data={feedback}
        total={countTotalFeedback}
        positive={countPositiveFeedbackPercentage()}
      />
    </div>
  );
}

export default App;
