import React, { useEffect, useState } from "react";
import OpenAI from "openai";

export default function Answer() {
  const [answer, setAnswer] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Fetch questions from the backend
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    // pull questions from the backend
    try {
      const response = await fetch("http://localhost:5000/generated-questions");
      const data = await response.json();
      setQuestions(data.generatedQuiz); //This is the array of questions
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const userAnswer = () => {
    if (answer !== "" && questions.length > 0) {
      // Perform any necessary actions with the user's answer here
      console.log("User's answer:", answer);
      fetchData(questions[currentQuestionIndex]);
      console.log(currentQuestionIndex); // Pass the current question to the fetchData function
    }
  };

  async function fetchData(question) {
    setIsLoading(true);
    try {
      const openai = new OpenAI({
        apiKey: "apikey",
        dangerouslyAllowBrowser: true,
      });

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You are an answer generator that is answering questions for a quiz that will focus on a coding language. The current question is: "${question}". Take the user's answer "${answer}" and generate  a response to whether the user answered the question correctly or not.`,
          },
        ],
        model: "gpt-3.5-turbo",
      });

      const data = completion.choices[0].message.content;
      console.log(data);
      setResponse(data);

      // Move to the next question in the array
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false); // Set loading to false after the response is received
  }

  return (
    <div>
      <h1>Answer</h1>
      <input
        type="text"
        placeholder="Enter your answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={userAnswer}>Submit</button>
      {isLoading && <p>Loading...</p>}
      {!isLoading && response && (
        <div>
          <h2>Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
