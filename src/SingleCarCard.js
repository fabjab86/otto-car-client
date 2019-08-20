import React from 'react';
import './styles/singleCardStyle.css'
import SingleCarDetails from "./SingleCarDetails";
import PropTypes from 'prop-types';

const SingleCarCard = ({car, getAllCars}) => {

    return (
       <SingleCarDetails car={car} getAllCars={getAllCars} />
    )
};

SingleCarCard.propTypes = {
    car: PropTypes.object.isRequired,
    getAllCars: PropTypes.func.isRequired
};

export default SingleCarCard

