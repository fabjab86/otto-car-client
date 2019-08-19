import React from 'react';
import './styles/singleCardStyle.css'
import SingleCardDetails from "./SingleCardDetails";

const SingleCarCard = ({car, getAllCars}) => {

    return (
       <SingleCardDetails car={car} getAllCars={getAllCars} />
    )
};

export default SingleCarCard

