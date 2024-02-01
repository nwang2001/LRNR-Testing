
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';


const Footer = () => {
    return (
        <footer className="bg-light text-black footer">
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    <div className="col-md-6">
                        <p className="text-center">quote</p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-center">Disclaimer: This is a disclaimer :D</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
