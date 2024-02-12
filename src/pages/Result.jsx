import React from 'react';
import './result.css';

export default function Result() {
    return (
        <div className='result'>
            <div className="container">
                <main>
                    <div id="results-page" className="page">
                        <h1>Quiz Results</h1>
                        <div className="results">
                            <p>You've answered O out of X questions correctly!</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}