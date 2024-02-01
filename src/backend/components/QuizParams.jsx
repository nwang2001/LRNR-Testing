import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import QuizContext from '../context.js/QuizContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/quiz.css';

function QuizParams() {
      // Access quiz context and state
    const quizContext = useContext(QuizContext);

  // Event handlers for form input changes
  const handleTopicChange = (event) => {
    quizContext.setTopic(event.target.value);
  };

  const handleExpertiseChange = (event) => {
    quizContext.setExpertise(event.target.value);
  };

  const handleNumQuestionsChange = (event) => {
    quizContext.setNumQuestions(event.target.value);
  };

  const handleQuestionStyleChange = (event) => {
    quizContext.setQuestionStyle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    quizContext.setIsFormSubmitted(!quizContext.isFormSubmitted);
  };
  const {topic, expertise, numQuestions, questionStyle, isFormSubmitted} = useContext(QuizContext);   

  useEffect(() => {
      if (topic && expertise && numQuestions && questionStyle){
          axios.post('http://localhost:5000/generate-quiz-questions', { topic, expertise, numQuestions, questionStyle })
              .then(response => {
                console.log(response.data);
              })
              .catch(err => console.error(err));
      }
  }, [isFormSubmitted]);
  
  return (
    <div className='container mt-5'>
    <h2>Quiz Generation Options</h2>
    <h3>Please choose preferences:</h3>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="Language" className="form-label">Language:</label>
            <select id="Language" className="form-select" onChange={handleTopicChange}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="React">React</option>
                <option value="MySql">MySql</option>
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="difficulty" className="form-label">Difficulty:</label>
            <select id="difficulty" className="form-select" onChange={handleExpertiseChange}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="numQuestions" className="form-label">Number of Questions:</label>
            <select id="numQuestions" className="form-select" onChange={handleNumQuestionsChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="style" className="form-label">Style:</label>
            <select id="style" className="form-select" onChange={handleQuestionStyleChange}>
                <option value="normal">Normal</option>
                <option value="gangsta">Gangsta</option>
                <option value="uhm">Uhm</option>
                <option value="yea">Yea</option>
            </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  );
}

export default QuizParams;