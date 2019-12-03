/**
 * `Sign up` Page for the Weather Dress App
 * Created on April 22, 2019
 *
 * @author Ralph Florent <r.florent@jacobs-university.de>
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Button, Card, CardBody, CardFooter, Col, Form, Input,
    InputGroup, InputGroupAddon, InputGroupText, Row
} from 'reactstrap';

// import AccountService from './account.service';

/**
 * `Signup` Component definition
 */
export default class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            fullname: '',
            username: '',
            email: '',
            password: '',
            password2: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // *****************************
    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (!this.validateForm(this.state).valid) {
            alert(this.validateForm(this.state).error);
            return;
        }

        const names = this.state.fullname.split(' ');
        const payload = {
            id: this.state.id,
            lastName: names.pop(),
            firstName: names.join(' '),
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        // const resp = await AccountService.save(payload);
        console.log(payload)
    }

    validateForm(form) {
        let errorMsg = '';

        if (form.fullname.length >= 3) {
            errorMsg += 'Full name must be at least 3 characters. ';
        }

        if (form.password !== form.password2) {
            errorMsg += 'Password does not match. ';
        }

        return { valid: errorMsg.length === 0, error: errorMsg }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="row col-sm-12">
                    <h3>
                        Account<br />
                        <em className="small text-muted">Create your profile</em>
                    </h3>
                </div>
                <hr />

                <Row className="justify-content-center">
                    <Col md="9" lg="7" xl="6">
                        <Card className="mx-4">
                            <CardBody className="p-4">
                                <Form>
                                    <h1>Register</h1>
                                    <p className="text-muted">Create your account</p>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-user"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text"
                                            placeholder="Full name"
                                            name="fullname" value={this.state.fullname}
                                            onChange={this.handleInputChange}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>@</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Username"
                                            name="username" value={this.state.username}
                                            onChange={this.handleInputChange}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-envelope"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Email"
                                            name="email" value={this.state.email}
                                            onChange={this.handleInputChange}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" placeholder="Password"
                                            name="password" value={this.state.password}
                                            onChange={this.handleInputChange}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="icon-lock"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" placeholder="Confirm password"
                                            name="password2" value={this.state.password2}
                                            onChange={this.handleInputChange} />
                                    </InputGroup>
                                    <Button color="success" block onClick={ this.handleSubmit}>Create Account</Button>
                                </Form>
                            </CardBody>
                            <CardFooter className="p-4">
                                <Row>
                                    <Col xs="12" sm="6">
                                        <Link to="/account" className="btn btn-outline-secondary btn-block mb-1">Sign In</Link>
                                    </Col>
                                    <Col xs="12" sm="6">
                                        <Link to="/home" className="btn btn-outline-secondary btn-block mb-1">Back to Home</Link>
                                    </Col>
                                </Row>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}