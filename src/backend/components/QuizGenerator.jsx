import React, { useEffect, useState } from 'react';

const QuizGenerator = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/generated-questions');
                const data = await response.json();
                setQuestions(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {questions}
        </div>
    );
};

export default QuizGenerator;
