import React from 'react';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

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

            <div class="cards">
                <div class="flip">
                    <div class="front" src="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                        <h1>MOUNTAIN</h1>
                    </div>
                    <div class="back">
                        <h2>Angular</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                </div>
                <div class="flip">
                    <div class="front" src="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                        <h1>LAKE</h1>
                    </div>
                    <div class="back">
                        <h2>Angular</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                </div>
                <div class="flip">
                    <div class="front" src="background-image: url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
                        <h1>Personalized Quizzes</h1>
                    </div>
                    <div class="back">
                        <h2>Personalized Quizzes</h2>
                        <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;