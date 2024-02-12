import React, { useEffect, useState, useContext, useReducer} from "react";
import Answer from "./Answer";
import QuizContext from "../context.js/QuizContext";
import "./QuizGenerator.css";

const QuizGenerator = () => {
  const [questions, setQuestions] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const quizContext = useContext(QuizContext);
  const [state, dispatch] = useReducer(reducer, {questionIndex: 0,});

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
    if (state.questionIndex < questions.length - 1) {
      dispatch({ type: 'INCREMENT' });
      // quizContext.setAnswer(""); // Reset the answer state
      // quizContext.setResponse(""); // Reset the response state
      setIsAnswerSubmitted(false); // Reset the answer submission state
    }
  };

  const handleAnswerSubmission = () => {
    setIsAnswerSubmitted(true);
  };

  return (
    <div className="quiz">
      {questions.length > 0 && (
        <div className="container">
          <div id="quiz-question" className="page">
          <h1>
            Question {state.questionIndex + 1} out of {questions.length}
          </h1>
          <p>{questions[state.questionIndex]}</p>
          {/* <button onClick={handleNextQuestion}>Next Question</button> */}

          <Answer onAnswerSubmitted={handleAnswerSubmission} questionIndex={state.questionIndex} />
          {isAnswerSubmitted && (
            <button onClick={handleNextQuestion}>Next Question</button>
          )}
        </div>
        </div>
      )}
    </div>
  );
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, questionIndex: state.questionIndex + 1 };
    case 'RESET':
      return { ...state, questionIndex: 0 };
    default:
      return state;
  }
};

export default QuizGenerator;
