import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="typewriter-container">
                <Typewriter
                    options={{
                        strings: ['HOLY', 'GUAC', 'BRO', 'WOW'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="image-container">
                <img src="/path/to/image.jpg" alt="Image" />
            </div>
            <div className="button-container">
                <Link to="/quiz" className="button">Go to Quiz</Link>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="card-header">
                        <h2>Personalized Quizzes</h2>
                    </div>
                    <div className="card-body">
                        <p>Greetings, young padawan. Are you ready to embark on a journey of personalized enlightenment through the art of coding? Our app can create custom quizzes that align with your coding skills and interests. Whether you are a novice or a master, our system can generate questions that will test your proficiency in programming languages, tools, and concepts.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Rewarding</h2>
                    </div>
                    <div className="card-body">
                        <p>Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process. With our personalized quiz app, you can track your progress, compete with your peers, and discover new areas of expertise. The journey of a thousand lines of code begins with a single keystroke.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Personal SME</h2>
                    </div>
                    <div className="card-body">
                        <p>Welcome to the path of knowledge. Our app is like having a personal subject matter expert at your side, guiding you on your journey towards wisdom.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;