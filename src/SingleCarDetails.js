import React from 'react';
import axios from 'axios';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './styles/singleCarDetails.css'
const SingleCarDetails = ({car, getAllCars}) => {

    const deleteCar = (carId) => {
        axios.delete(`/cars?carId='${carId}'`)
            .then(response => console.log(response))
            .then(() => getAllCars())
            .catch(err => console.log(err))
    };

    return(

        <div className={"singleCarDetails"}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require("./defaultCar.png")} />
                <Card.Body>
                    <Card.Title>{car.make}</Card.Title>
                    <Card.Text>
                        {car.model} {car.model_year}
                    </Card.Text>
                    <Button className={"edit"} variant="primary" onClick={() => {}}>Edit</Button>
                    <Button variant="danger" onClick={() => {deleteCar(car.car_id)}}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    )
};

export default SingleCarDetails;
