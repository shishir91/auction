import React, { useState } from 'react';
import Auction from '../images/auction.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

// Add this custom CSS class to position the icon
const inputGroupWithIcon = {
    position: 'relative',
};

const iconStyle = {
    position: 'absolute',
    right: '10px', // Adjust this value to control the icon's position
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#bcbfbb',
    cursor: 'pointer',
    zIndex: 2,
};

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                {/* <!-- Image Section --> */}
                <div className="col-md-6 d-none d-md-block">
                    <img
                        src={Auction}
                        alt="Login Image"
                        className="custom-img p-3 m-3"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                        }}
                    />
                </div>

                {/* <!-- Login Form Section --> */}
                <div className="col-md-6 col-sm-12">
                    <div className="m-3 p-3">
                        <form className="p-4" action="#" method="post">
                            <h1><b>Welcome to the Auction House</b></h1>
                            <h3>Where every bidding is great</h3>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control text-success fw-bold mt-2 p-3 h-4 border-dark" id="email" name="email" required placeholder="Email" />
                            </div>
                            <div className="form-group" style={inputGroupWithIcon}>
                                <label htmlFor="password">Password</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control text-success fw-bold mt-2 p-3 h-4 border-dark"
                                        id="password"
                                        name="password"
                                        required
                                        placeholder="Password"
                                        minLength={8}
                                    />
                                    <div className="input-group-append">
                                        <span
                                            className="input-group-text"
                                            style={iconStyle}
                                            onClick={togglePasswordVisibility}
                                        >
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="text-decoration-none text-success"><b>Forget Your Password</b>?</a>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-success fw-bold btn-block">
                                    Login
                                </button>
                            </div>
                            <div className="d-flex justify-content-center">
                                New User? &nbsp; <a href="#" className="text-decoration-none text-success"> <b> Create Your Account </b></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;