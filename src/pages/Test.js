import React, { useState } from 'react';
import QuizForm from '../components/quiz'
import QuizParams from '../backend/components/QuizParams'
import QuizContext from '../backend/context.js/QuizContext'

export default function Quiz() {
    // Define state variables for topic, expertise, numQuestions, and questionStyle

    const [topic, setTopic] = useState('');
    const [expertise, setExpertise] = useState('=');
    const [numQuestions, setNumQuestions] = useState('');
    const [questionStyle, setQuestionStyle] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const [response, setResponse] = useState('');

    // Create a context value object with the state variables and their corresponding setter functions

    const quizContextValue = {
        topic,
        expertise,
        numQuestions,
        questionStyle,
        isFormSubmitted,
        questionIndex,
        answer,
        response,
        setTopic,
        setExpertise,
        setNumQuestions,
        setQuestionStyle,
        setIsFormSubmitted,
        setQuestionIndex,
        setAnswer,
        setResponse,
    };

    return (
        <div>
            <QuizContext.Provider value={quizContextValue}>
                {/* <QuizForm /> */}
                <QuizParams />
            </QuizContext.Provider>

        </div>
    )
}
