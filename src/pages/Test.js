import React, { useState } from 'react';
import QuizForm from '../components/quiz'
import QuizParams from '../backend/components/QuizParams'
import QuizContext from '../backend/context.js/QuizContext'

export default function Quiz() {
    // Define state variables for topic, expertise, numQuestions, and questionStyle

    const [topic, setTopic] = useState('GoLang');
    const [expertise, setExpertise] = useState('Novice');
    const [numQuestions, setNumQuestions] = useState('5');
    const [questionStyle, setQuestionStyle] = useState('normal');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // Create a context value object with the state variables and their corresponding setter functions

    const quizContextValue = {
        topic,
        expertise,
        numQuestions,
        questionStyle,
        isFormSubmitted,
        setTopic,
        setExpertise,
        setNumQuestions,
        setQuestionStyle,
        setIsFormSubmitted,
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
