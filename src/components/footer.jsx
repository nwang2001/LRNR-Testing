import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left col-md-4 col-sm-6">
                <h2>
                    {" "}
                    LRNR<span> logo</span>
                </h2>
                <p className="menu">
                    <a href="/"> Home</a> | <a href="/quiz"> Quiz</a> | <a href="/account"> Account</a>
                </p>
                <p className="name"> Company Name © 2024</p>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <div>
                    <p>
                        <span>123 Best Learning</span> Learn, Present
                    </p>
                </div>
                <div>
                    <p> (+1) 415 240 4280</p>
                </div>
                <div>
                    <p className='email'>
                        support@lrnr.org
                    </p>
                </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <p className="about">
                    <span> About the company</span> Welcome to LRNR, your dynamic platform for creating personalized coding quizzes! At LRNR, we empower users to effortlessly generate custom quizzes tailored to their preferences. Dive into the world of coding languages with LRNR. It is your go-to destination for fun and effective learning. Unleash your coding prowess and make learning an adventure with LRNR!
                </p>
            </div>
        </footer>
    );
}

export default Footer;