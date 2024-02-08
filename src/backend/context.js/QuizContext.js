import React from 'react';

// Create QuizContext with default values
const QuizContext = React.createContext({
  topic: '',
  expertise: '',
  numQuestions: '',
  questionStyle: '',
  isFormSubmitted: false,
  questionIndex: 0,
  setQuestionIndex: () => {}, // add this line
  answer: '',
  setAnswer: () => {}, // add this line
  response: '',
  setResponse: () => {}, // add this line


});

export default QuizContext;