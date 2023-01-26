import logo from './logo.svg';
import './App.css';
import CarForm from "./components/CarForm/CarForm";
import Cars from "./components/Cars/Cars";
import {useEffect, useState} from "react";
import {carService} from "./services";
import async from "async";

function App() {

    const [cars,setCar]=useState([])
    const [car,SetDeleteCar]=useState([])
    const [CarForUpdate,SetCarForUpdate]=useState(null)

    console.log(car);


    useEffect(() => {
        carService.getAll().then(({data}) =>{setCar(data)
        })
    }, [])

    useEffect(() => {
        carService.deleteById(car).then( async ()=>{
            const {data} = await carService.getAll()
            setCar([...data])
        })
    }, [car])



  return (
    <div className="App">
     <CarForm setCar={setCar} CarForUpdate={CarForUpdate}/>
        <hr/>
      <Cars cars={cars} SetDeleteCar={SetDeleteCar} SetCarForUpdate={SetCarForUpdate}/>
    </div>
  );
}

export default App;
