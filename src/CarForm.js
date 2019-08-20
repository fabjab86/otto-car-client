import React, {Component} from 'react';
import axios from 'axios';
import 'react-dropdown/style.css'
import './styles/index.css'
import {carMakes, carModels, carYear} from "./helpers/helperObjects";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import './styles/carForm.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';


class CarForm extends Component {
    constructor(props) {
        super(props);
        this.state = {make: '', model: '', model_year: ''};

        this.handleMakeChange = this.handleMakeChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleMakeChange(event) {
        this.setState({make: event.target.innerText});
    }

    handleModelChange(event) {
        this.setState({model: event.target.innerText});
    }

    handleYearChange(event) {
        this.setState({model_year: event.target.innerText});
    }


    handleSubmit(event) {
        axios.post('/cars', {
            make: this.state.make,
            model: this.state.model,
            model_year: this.state.model_year
        }).then(response => {
            this.setState({make: '', model: '', model_year: ''});
            alert(response.data.message);
        }).then(() => this.props.getAllCars())
            .catch(err => {
                if (err.response.status === 422) {
                    alert('Invalid request');
                    console.log(err)
                }
                if (err.response.status === 500) {
                    alert('Internal Server Error');
                    console.log(err)
                }
            });
        event.preventDefault(event);
    }
    render() {

        return (

                <div className={'mainFormDiv'}>
                    <h2 className="formHeader">Add new car</h2>
                    <Form>
                        <div className={'dropDownOptions'}>
                        <Form.Group controlId="formBasicEmail">
                            <Row>
                                <Col className={'dropDownLabel'}>
                                    <Form.Label className={'formLabel'}>Car Make</Form.Label>
                                </Col>
                                <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={this.state.make === "" ? "Select" : this.state.make}
                                variant={'success'}>
                                    {carMakes.map((car, index) => {
                                        return (
                                        <Dropdown.Item
                                            onClick={this.handleMakeChange}
                                            key={index}>
                                            {car.value}
                                        </Dropdown.Item>
                                        )
                                    })}
                            </DropdownButton>
                                </Col>
                            </Row>

                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Row>
                                <Col className={'dropDownLabel'}>
                                    <Form.Label className={'formLabel'}>Car Model</Form.Label>
                                </Col>
                            <Col>
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={this.state.model === "" ? "Select" : this.state.model}
                                    variant={'success'}>
                                {carModels.map((car, index) => {
                                    return (
                                    <Dropdown.Item
                                        onClick={this.handleModelChange}
                                        key={index}>
                                        {car.value}
                                    </Dropdown.Item>
                                    )
                                })}
                            </DropdownButton></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Row>
                                <Col className={'dropDownLabel'}>
                                    <Form.Label className={'formLabel'}>Car Year</Form.Label></Col>
                                <Col>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={this.state.model_year === "" ? "Select" : this.state.model_year}
                                variant={'success'}>
                                {carYear.map((car, index) => {
                                    return (
                                    <Dropdown.Item
                                        onClick={this.handleYearChange}
                                        key={index}>
                                        {car.value}
                                    </Dropdown.Item>
                                    )
                                })}
                            </DropdownButton></Col>
                            </Row>
                        </Form.Group>
                            <Button
                                id={"carFormSubmitButton"}
                                variant="primary"
                                type="submit"
                                onClick={this.handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
        )
    }

}

CarForm.propTypes = {
    getAllCars: PropTypes.func.isRequired
};

export default CarForm;
