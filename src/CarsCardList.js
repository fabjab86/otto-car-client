import React from 'react';
import SingleCarCard from "./SingleCarCard";
import './styles/singleCardStyle.css'


const CarsCardList = ({allCars}) => {
    return (

        allCars.map(car =>
            <div className="allCarsCards" key={car.car_id}>
                <SingleCarCard car={car} />
            </div>
        )
    )
};

export default CarsCardList;
