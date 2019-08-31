import React from 'react';
import SingleCarDetails from "./SingleCarDetails";
import PropTypes from 'prop-types';

const SingleCarCard = ({car, getAllCars, onEditShow, onDeleteShow}) => {

    return (
       <SingleCarDetails
           car={car}
           getAllCars={getAllCars}
           onEditShow={onEditShow}
           onDeleteShow={onDeleteShow}
       />
    )
};

SingleCarCard.propTypes = {
    car: PropTypes.object.isRequired,
    getAllCars: PropTypes.func.isRequired
};

export default SingleCarCard

