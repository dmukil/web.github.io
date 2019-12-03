/**
 * `Home` Page for the Weather Dress App
 * Created on April 7, 2019
 *
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */
import React, { Component } from 'react';

import { Plotter, Slider } from '../Common';

/**
 * `Home` Component definition
 */
export default class Home extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="row col-sm-12">
                    <h3>
                        Welcome to Weather Dress<br />
                        <em className="small text-muted">Feel comfortable. Enjoy nature.</em>
                    </h3>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-7">
                        <Plotter />
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-header text-center">
                                Weather in Bremen, DE
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">Today's Weather</h5>
                                <h6 className="card-subtitle text-center mb-2 text-muted">15:30 Apr 8, 2019</h6>
                                <h6 className="card-subtitle text-center mb-2 text-muted">Clear sky</h6>
                                <br />
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th>Wind</th>
                                            <td>Gentle Breeze, 4.6 m/s, North-northeast</td>
                                        </tr>
                                        <tr>
                                            <th>Pressure</th>
                                            <td>1011 hpa</td>
                                        </tr>
                                        <tr>
                                            <th>Humidity</th>
                                            <td>52%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <Slider />
                    </div>
                    <div className="col-md-5">
                        <div className="jumbotron" style={{ padding: '32px 16px' }}>
                            <h3>Hi, Jane Smith</h3>
                            <p className="lead">Based on today's weather, you are suggested to wear the following:</p>
                            <ul className="list-style font-weight-light">
                                <li>For the upper body parts
                                    <ul className="font-italic">
                                        <li>1 Jacket</li>
                                        <li>1 Sweather</li>
                                        <li>1 shirt or t-shirt</li>
                                    </ul>
                                </li>
                                <li>For the lower body parts
                                    <ul className="font-italic">
                                        <li>1 thermal (legging-like)</li>
                                        <li>1 pair of Jeans</li>
                                    </ul>
                                </li>
                                <li>Heavy shoes</li>
                                <li>Light socks</li>
                                <li>A scarf</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}