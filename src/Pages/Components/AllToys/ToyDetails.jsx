import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        <div>
            <h3>dwtailst</h3>
        </div>
    );
};

export default ToyDetails;