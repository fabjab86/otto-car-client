import React from 'react';
import axios from 'axios';

const SingleCardDetails = ({car, getAllCars}) => {

    const deleteCar = (carId) => {
        axios.delete(`/cars?carId='${carId}'`)
            .then(response => console.log(response))
            .then(() => getAllCars())
            .catch(err => console.log(err))
    };

    return(

        <div className={"singleCard"}>
            <div>
                <p>
                    Added on: {car.date_added.slice(0, 10)}
                </p>
                <p>
                    Make: {car.make}
                </p>
                <p>
                    Model: {car.model}
                </p>
                <p>
                    Model year: {car.model_year}
                </p>
                <p>
                    Active: {car.active.toString()}
                </p>
                <button className={"edit"}>Edit</button>
                <button className={"delete"} onClick={() => {deleteCar(car.car_id)}}>Delete</button>
            </div>

        </div>
    )
};

export default SingleCardDetails;
