/**
 * Header layout for the Weather Dress App
 * Created on April 7, 2019
 *
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */

/**
 * Header layout (smart) component
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">Weather Dress</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link to="home" className="nav-link">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link to="account" className="nav-link">Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact" className="nav-link">Contact</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="help" className="nav-link" tabIndex="-1" aria-disabled="true">Help</Link>
                            </li> */}
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}

