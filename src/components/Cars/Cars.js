import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";
import {carService} from "../../services";


const Cars = ({cars,SetDeleteCar,SetCarForUpdate}) => {

    return (
        <div>

            {cars && cars.map(car => <Car key={car.id} car={car} SetDeleteCar={SetDeleteCar} SetCarForUpdate={SetCarForUpdate} />)}
            
        </div>
    );
};

export default Cars;