import React from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './styles/singleCarDetails.css'
import EditCarModal from "./EditCarModal";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import PropTypes from 'prop-types';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";


const SingleCarDetails = ({car, getAllCars}) => {

    const deleteCar = (carId) => {

        axios.delete(`/cars?carId='${carId}'`)
            .then(() => {
                getAllCars();
            })
            .catch(err => {
                alert(err);
                console.log(err)
            })
    };

    const [showEditModal, setEditModalShow] = React.useState(false);
    const [showDeleteModal, setDeleteModalShow] = React.useState(false);


    return(

        <div className={"singleCarDetails"}>
            <Card style={{ width: '18rem' }}>
                <div id={'para'}>
                <p style={{fontWeight: 'bold'}}>ID: {car.car_id}</p>
                </div>

                <ButtonToolbar className={"editAndDeleteButtons"}>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="Options"
                        variant={'secondary'}
                        size="sm">
                        <Dropdown.Item>
                            <Button variant="link" onClick={() => setEditModalShow(true)}>
                                Edit
                            </Button>
                            <EditCarModal
                                getAllCars={getAllCars}
                                car={car}
                                show={showEditModal}
                                onHide={() => setEditModalShow(false)}
                            />
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <Button
                                variant="link"
                                onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) deleteCar(car.car_id)}}>
                                Delete
                            </Button>
                        </Dropdown.Item>

                        <Dropdown.Item >View
                        </Dropdown.Item>
                    </DropdownButton>
                </ButtonToolbar>

                <Card.Img variant="top" src={require("./defaultCar.png")} />
                <Card.Body>
                    <Card.Title>{car.make}</Card.Title>
                    <Card.Text>
                        {car.model} {car.model_year}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

SingleCarDetails.propTypes = {
    car: PropTypes.object.isRequired,
    getAllCars : PropTypes.func.isRequired,

};
export default SingleCarDetails;


