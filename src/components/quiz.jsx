import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './quiz.css';

const QuizForm = () => {
    return (
        <div className='container mt-5 quiz'>
            <h2>Quiz Generation Options</h2>
            <h3>Please choose preferences:</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="Language" className="form-label">Language:</label>
                    <select id="Language" className="form-select">
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="React">React</option>
                        <option value="MySql">MySql</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="difficulty" className="form-label">Difficulty:</label>
                    <select id="difficulty" className="form-select">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="numQuestions" className="form-label">Number of Questions:</label>
                    <select id="numQuestions" className="form-select">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="style" className="form-label">Style:</label>
                    <select id="style" className="form-select">
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
};

export default QuizForm;
