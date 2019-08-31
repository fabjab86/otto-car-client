import React, {Component} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';
import axios from "axios";

class DeleteCarModal extends Component {

    onClose = () => {
        this.props.onHide();
    };


    deleteCar = (carId) => {
        axios.delete(`/cars?carId='${carId}'`)
            .then(() => this.props.onHide())
            .then(() => {
                this.props.getAllCars();
            })
            .then(this.props.onDeleteShow())
            .catch(err => {
                alert(err);
                console.log(err)
            })
    };

    render() {
        const {id} = this.props;
        return (
            <Modal
                {...this.props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton onHide={() => this.onClose()}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div className={'deleteCarModal'}>
                            <h4>Are you sure you wish to delete this car?</h4>
                        </div>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Footer className={"deleteModalButtons"}>
                    <Button onClick={() => this.onClose()} variant={'primary'}>Cancel</Button>
                    <Button onClick={() => this.deleteCar(id)} variant={'danger'}>Delete</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

DeleteCarModal.propTypes = {
    onHide: PropTypes.func.isRequired,
    onDeleteShow: PropTypes.func,
    getAllCars: PropTypes.func.isRequired
};

export default DeleteCarModal
