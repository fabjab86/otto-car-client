import React from 'react';
import './styles/singleCardStyle.css'
import SingleCardDetails from "./SingleCardDetails";

const SingleCarCard = ({car}) => {

    return (
       <SingleCardDetails car={car} />
    )
};

export default SingleCarCard

