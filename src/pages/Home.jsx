import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="top-container">
                <div className="left-container">
                    <p className="typewriter-container">
                        Your guided path to programming enlightenment. Become proficient in{' '}
                        <Typewriter
                            options={{
                                strings: ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                    <div className="button-container">
                        <Link to="/quiz" className="button">Go to Quiz</Link>
                    </div>
                </div>
                <div className="image-container">
                    <img src="/turt.png" alt="Image" />
                </div>
            </div>

            <div className="cards">
                <div className="flip">
                    <div className="front" src="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                        <h1>Rewards</h1>
                    </div>
                    <div className="back">
                        <h2>Rewards</h2>
                        <p>Our app is designed to be both challenging and rewarding, so you can learn new concepts while enjoying the process. With our personalized quiz app, you can track your progress, compete with your peers, and discover new areas of expertise. The journey of a thousand lines of code begins with a single keystroke</p>
                    </div>
                </div>
                <div className="flip">
                    <div className="front" src="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                        <h1>Personal SME</h1>
                    </div>
                    <div className="back">
                        <h2>Personal SME</h2>
                        <p>Welcome to the path of knowledge. Our app is like having a personal subject matter expert at your side, guiding you on your journey towards wisdom</p>
                    </div>
                </div>
                <div className="flip">
                    <div className="front" src="background-image: url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                        <h1>Personalized Quizzes</h1>
                    </div>
                    <div className="back">
                        <h2>Personalized Quizzes</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
