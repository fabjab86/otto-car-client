import React from 'react';

const SingleCardDetails = ({car}) => {

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
                <button className={"delete"} onClick={() => {}}>Delete</button>
            </div>

        </div>
    )
};

export default SingleCardDetails;
