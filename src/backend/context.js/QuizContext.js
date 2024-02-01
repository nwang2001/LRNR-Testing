import React from 'react';

// Create QuizContext with default values
const QuizContext = React.createContext({
  topic: 'GoLang',
  expertise: 'Novice',
  numQuestions: '5',
  questionStyle: 'normal',
  isFormSubmitted: false,
});

export default QuizContext;