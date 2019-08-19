import React from 'react';
import SingleCarCard from "./SingleCarCard";
import './styles/singleCardStyle.css'


const CarsCardList = ({allCars, getAllCars}) => {
    return (

        allCars.map(car =>
            <div className="allCarsCards" key={car.car_id}>
                <SingleCarCard car={car} getAllCars={getAllCars} />
            </div>
        )
    )
};

export default CarsCardList;
