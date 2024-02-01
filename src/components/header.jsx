
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Home from '../pages/Home.jsx';
import Test from '../pages/Test'
import Account from '../pages/Account.jsx';
import QuizGenerator from '../backend/components/QuizGenerator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const Header = () => {
    return (
        <Router>
            <div className="custom-header-container">
                <Navbar className="custom-navbar" expand="lg">
                    <Navbar.Brand as={Link} to="/"><img src="/turt.png" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
                            <Nav.Link as={Link} to="/account">Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quiz" element={<Test />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/quiz-gen" element={<QuizGenerator />} />
                </Routes>
            </div>
        </Router>
    );
};

export default Header;
