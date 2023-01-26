import React from 'react';

const Car = ({car,SetDeleteCar,SetCarForUpdate}) => {
    const {id,price,brand,year}=car

    return (
        <div>

            <div>ID:{id}</div>
            <div>Price:{price}</div>
            <div>Model:{brand}</div>
            <div>Year:{year}</div>
            <button onClick={()=>SetDeleteCar(car.id)}>Delete</button>
            <button onClick={()=>SetCarForUpdate(car)}>Update</button>

        </div>
    );
};

export default Car;