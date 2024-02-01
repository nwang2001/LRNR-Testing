import React from 'react';

// Create QuizContext with default values
const QuizContext = React.createContext({
  topic: '',
  expertise: '',
  numQuestions: '',
  questionStyle: '',
  isFormSubmitted: false,
});

export default QuizContext;