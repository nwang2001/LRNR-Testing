import React, { useEffect, useState } from "react";
import Answer from "./Answer";

const QuizGenerator = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    }
  };
  const handlePrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      {questions.length > 0 && (
        <div>
          <h2>
            Question {currentIndex + 1} out of {questions.length}
          </h2>
          <p>{questions[currentIndex]}</p>
          <button onClick={handlePrevQuestion}>Previous Question</button>
          <button onClick={handleNextQuestion}>Next Question</button>
          <Answer />
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;
