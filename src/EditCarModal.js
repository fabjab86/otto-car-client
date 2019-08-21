import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {carMakes, carModels, carYear, active} from "./helpers/helperObjects";
import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {capitalizeFirstLetter} from "./helpers/helperFunctions";
import PropTypes from 'prop-types';
import './styles/editCarModal.css'
import axios from 'axios';


class EditCarModal extends Component {
    constructor(props) {
        super(props);
        this.state={active:'', date_added: '', make: '', model: '', model_year:''};

        this.handleMakeChange = this.handleMakeChange.bind(this);
        this.handleModelChange = this.handleModelChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleActiveChange = this.handleActiveChange.bind(this);
        this.setStateToOriginalValues = this.setStateToOriginalValues.bind(this);
        this.onClose = this.onClose.bind(this);
        this.editCarDetailsApi = this.editCarDetailsApi.bind(this);
    }


    setStateToOriginalValues() {
        this.setState({
            active: capitalizeFirstLetter(this.props.car.active.toString()),
            date_added: this.props.car.date_added,
            make: this.props.car.make,
            model: this.props.car.model,
            model_year:this.props.car.model_year
        })
    }
    componentDidMount() {
            this.setStateToOriginalValues();
    }

    handleMakeChange(event) {
        this.setState({make: event.target.innerText});
    }

    handleModelChange(event) {
        this.setState({model: event.target.innerText});
    }

    handleActiveChange(event) {
        this.setState({active: event.target.innerText});
    }

    handleYearChange(event) {
        this.setState({model_year: event.target.innerText});
    }

    onClose() {
        this.props.onHide();
        this.setStateToOriginalValues();
    }

    editCarDetailsApi(id) {
        axios.put(`/cars?carId='${id}'`,
            {
                make: this.state.make,
                model: this.state.model,
                model_year: this.state.model_year,
                active: this.state.active
            }).then(response => console.log(response))
            .then(this.props.onHide())
            .then(() => this.props.getAllCars())
            .catch((err) => {       if (err.response.status === 422) {
                alert('Invalid request');
                console.log(err)
            }
                if (err.response.status === 500) {
                    alert('Internal Server Error');
                    console.log(err)
                }})
    }

    render() {
        const style = {
        para: {
            fontSize: 10
        },
            span: {
                fontSize: 18

            }
    };

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onHide={() => this.onClose()}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className={'editCarTitle'}>
                            <h4>Edit Car</h4> <p id={'paraEditCar'}>{this.props.car.car_id}</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{this.props.car.make} <span style={style.span}>{this.props.car.model}</span></h4>
                        <p style={style.para}>added on {this.props.car.date_added.toString().slice(0, 10)}</p>


                    <div>
                        <Form>
                            <div>
                                <Form.Group controlId="formBasicEmail">
                                    <Row className={'editCardDetailsRow'}>
                                        <Col>
                                            <Form.Label>Car Make</Form.Label>
                                        </Col>
                                        <Col>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title={this.state.make}
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
                                    <Row className={'editCardDetailsRow'}>
                                        <Col>
                                            <Form.Label>Car Model</Form.Label>
                                        </Col>
                                        <Col>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title={this.state.model}
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
                                    <Row className={'editCardDetailsRow'}>
                                        <Col>
                                            <Form.Label>Car Year</Form.Label></Col>
                                        <Col>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title={this.state.model_year}
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
                                    <Row className={'editCardDetailsRow'}>
                                        <Col >
                                            <Form.Label>Active</Form.Label></Col>
                                        <Col>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title={this.state.active}
                                                variant={'success'}>
                                                {active.map((car, index) => {
                                                    return (
                                                        <Dropdown.Item
                                                            onClick={this.handleActiveChange}
                                                            key={index}>
                                                            {car.value}
                                                        </Dropdown.Item>
                                                    )
                                                })}
                                            </DropdownButton></Col>
                                    </Row>
                                </Form.Group>
                            </div>
                        </Form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {this.editCarDetailsApi(this.props.car.car_id)}} variant={'primary'}>Edit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}


EditCarModal.propTypes = {
    car: PropTypes.object.isRequired,
    getAllCars: PropTypes.func.isRequired,
    onHide: PropTypes.func.isRequired
};


export default EditCarModal;
