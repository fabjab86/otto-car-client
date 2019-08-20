import React from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './styles/singleCarDetails.css'
import EditCarModal from "./EditCarModal";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import PropTypes from 'prop-types';


const SingleCarDetails = ({car, getAllCars}) => {

    const deleteCar = (carId) => {

        axios.delete(`/cars?carId='${carId}'`)
            .then((response) => {
                console.log(response);
                getAllCars();
                alert(response.data.message)
            })
            .catch(err => {
                alert(err);
                console.log(err)
            })
    };

    const [modalShow, setModalShow] = React.useState(false);


    return(

        <div className={"singleCarDetails"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require("./defaultCar.png")} />
                <Card.Body>
                    <Card.Title>{car.make}</Card.Title>
                    <Card.Text>
                        {car.model} {car.model_year}
                    </Card.Text>
                    <div className={'editAndDeleteButtons'}>
                    <ButtonToolbar>
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                            Edit
                        </Button>

                        <EditCarModal
                            getAllCars={getAllCars}
                            car={car}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </ButtonToolbar>
                    <Button variant="danger" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) deleteCar(car.car_id)}}>Delete</Button>
                    </div>
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


