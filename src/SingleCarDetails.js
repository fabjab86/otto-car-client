import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './styles/singleCarDetails.css'
import EditCarModal from "./EditCarModal";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import PropTypes from 'prop-types';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DeleteCarModal from "./DeleteCarModal";
import ViewCarModal from "./ViewCarModal";


const SingleCarDetails = ({car, getAllCars, onEditShow, onDeleteShow}) => {

    const [showEditModal, setEditModalShow] = React.useState(false);
    const [showDeleteModal, setDeleteModalShow] = React.useState(false);
    const [showViewCarModal, setViewCarModalShow] = React.useState(false);


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
                            <Button variant="link" onClick={() => setViewCarModalShow(true)} style={{color: 'black'}}>
                                View
                            </Button>
                            <ViewCarModal
                                car={car}
                                show={showViewCarModal}
                                onHide={() => setViewCarModalShow(false)}
                            />
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Button variant="link" onClick={() => setEditModalShow(true)} style={{color: 'black'}}>
                                Edit
                            </Button>
                            <EditCarModal
                                getAllCars={getAllCars}
                                car={car}
                                show={showEditModal}
                                onHide={() => setEditModalShow(false)}
                                onEditShow={onEditShow}
                            />
                        </Dropdown.Item>
                        <Dropdown.Item  id='dropDownItem'>
                            <Button
                                variant="link"
                                onClick={() => setDeleteModalShow(true)}
                                id='deleteButton'
                            >
                                Delete
                            </Button>
                            <DeleteCarModal
                                show={showDeleteModal}
                                getAllCars={getAllCars}
                                onHide={() => setDeleteModalShow(false)}
                                id={car.car_id}
                                onDeleteShow={onDeleteShow}
                            />
                        </Dropdown.Item>
                    </DropdownButton>
                </ButtonToolbar>

                <Card.Img variant="top" src={require("./images/defaultCar.png")} />
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


