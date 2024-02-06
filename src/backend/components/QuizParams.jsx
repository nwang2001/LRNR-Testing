import React, { useEffect, useState, useContext } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import QuizContext from '../context.js/QuizContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components/quiz.css';

function QuizParams() {
      // Access quiz context and state
    const quizContext = useContext(QuizContext);
    const navigate = useNavigate();


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

  const handleSubmit = async (event) => {
    event.preventDefault();
    quizContext.setIsFormSubmitted(!quizContext.isFormSubmitted);
    console.log(quizContext.isFormSubmitted);
    // const apiCall = fetch('/generated-questions'); 

    // try {
    //     const response = await apiCall;
    //     const data = await response.json();

    //     // Do something with the data if needed

    //     // Navigate to /quiz-gen once the API call is complete
    //     navigate('/quiz-gen');
    //       } catch (error) {
    //     console.error('Failed to fetch data:', error);
    // }
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
            <label htmlFor="Topic" className="form-label">Topic:</label>
            <select id="Topic" className="form-select" onChange={handleTopicChange}>
                <option value="GoLang">GoLang</option>
                <option value="AWS">AWS</option>
                <option value="JavaScript">JavaScript</option>
                <option value="CI/CD">CI/CD</option>
                <option value="JavaScript">JavaScript</option>
               <option value="Home Gardens">Home Gardens</option> 
               <option value="Coffee">Coffee</option>
               <option value="Finger Foods">Finger Foods</option>
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="Expertise" className="form-label">Expertise:</label>
            <select id="Expertise" className="form-select" onChange={handleExpertiseChange}>
                <option value="Novice">Novice</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="numQuestions" className="form-label">Number of Questions:</label>
            <select id="numQuestions" className="form-select" onChange={handleNumQuestionsChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="style" className="form-label">Style of Questions:</label>
            <select id="style" className="form-select" onChange={handleQuestionStyleChange}>
                <option value="normal">Normal</option>
                <option value="Master Oogway">Master Oogway</option>
                <option value="1940's gangster">1940's gangster</option>
                <option value="like I'm an 8 year old">like I'm an 8 year old</option>
                <option value="Jedi">Jedi</option>
                <option value="Captain Jack Sparrow">Captain Jack Sparrow</option>
                <option value="Matthew McConaughey">Matthew McConaughey</option>
            </select>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  );
}

export default QuizParams;