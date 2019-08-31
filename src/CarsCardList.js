import React from 'react';
import SingleCarCard from "./SingleCarCard";
import PropTypes from 'prop-types';


const CarsCardList = ({allCars, getAllCars, onEditShow, onDeleteShow}) => {
    return (

        allCars.map(car =>
            <div className="allCarsCards" key={car.car_id}>
                <SingleCarCard
                    car={car}
                    getAllCars={getAllCars}
                    onEditShow={onEditShow}
                    onDeleteShow={onDeleteShow}/>
            </div>
        )
    )
};

CarsCardList.propTypes = {
    allCars: PropTypes.array.isRequired,
    getAllCars : PropTypes.func.isRequired
};

export default CarsCardList;
