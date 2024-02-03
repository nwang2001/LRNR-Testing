import React from 'react'
import './account.css'

export default function account() {
    return (
        <div className="account">
            <main>
                <h1>Your Account</h1>
                <div className="box-container">
                    <div className="box">
                        <h2>Days Streak</h2>
                        <div className="streak">
                            <p>30</p>
                        </div>
                    </div>
                    <div className="box">
                        <h2>Level and Experience</h2>
                        <div className="level">
                            <p>Level: 10</p>
                            <p>Experience: 1000/5000</p>
                        </div>
                    </div>
                    <div className="box">
                        <h2>Platinum Quizzes</h2>
                        <div className="performance">
                            <ul>
                                <li>Quiz 1</li>
                                <li>Quiz 2</li>
                                <li>Quiz 3</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
