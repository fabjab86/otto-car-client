import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import './styles/viewCarModal.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ViewCarModal extends Component {

    onClose() {
        this.props.onHide();
    }

    render() {
        const {car} = this.props;
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onHide={() => this.onClose()}>
                    <Modal.Title>
                        <div className={'viewCarTitle'}>
                            <p id={"paraViewCar"}>Car ID: {car.car_id}</p>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className={'row2'}>
                        <Col>
                            <h6 className={'firstItem'}>Make: </h6>
                        </Col>
                        <Col>
                            <h6>{car.make}</h6>
                        </Col>
                    </Row>
                    <Row className={'row1'}>
                        <Col>
                            <h6 className={'item'}>Model: </h6>
                        </Col>
                        <Col>
                            <h6>{car.model}</h6>
                        </Col>
                    </Row>
                    <Row className={'row2'}>
                        <Col>
                            <h6 className={'item'}>Added on: </h6>
                        </Col>
                        <Col>
                            <h6>{car.date_added.toString().slice(0, 10)}</h6>
                        </Col>
                    </Row>
                    <Row className={'row1'}>
                        <Col>
                            <h6 className={'item'}>Model year: </h6>
                        </Col>
                        <Col>
                            <h6>{car.model_year}</h6>
                        </Col>
                    </Row>
                    <Row className={'row2'}>
                        <Col>
                            <h6 className={'item'}>Active</h6>
                        </Col>
                        <Col>
                            <h6>{car.active.toString()}</h6>
                        </Col>
                    </Row>

                </Modal.Body>
            </Modal>
        )
    }
}

export default ViewCarModal

