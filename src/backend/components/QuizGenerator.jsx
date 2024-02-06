import React, { useEffect, useState } from "react";
import Answer from "./Answer";

const QuizGenerator = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/generated-questions"
        );
        const data = await response.json();
        setQuestions(data.generatedQuiz);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setIsAnswerSubmitted(false); // Reset the answer submission state
    }
  };

  const handleAnswerSubmission = () => {
    setIsAnswerSubmitted(true);
  };

  return (
    <div>
      {questions.length > 0 && (
        <div>
          <h2>
            Question {currentIndex + 1} out of {questions.length}
          </h2>
          <p>{questions[currentIndex]}</p>
          <Answer onAnswerSubmitted={handleAnswerSubmission} />
          {isAnswerSubmitted && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;
