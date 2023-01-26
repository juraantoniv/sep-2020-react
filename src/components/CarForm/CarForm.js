import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {carValidator} from "../../validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi"


const CarForm = ({setCar,CarForUpdate}) => {
    const { register, handleSubmit,reset, formState: { errors,isValid },setValue } = useForm({mode:"all",resolver:joiResolver(carValidator)});

    const submit= async (car)=> {
        const {data} = await carService.create(car)
        setCar(prev=>[...prev,data])
        reset()
    }
    // const update= async ()=> {
    //     if(CarForUpdate){
    //         setValue('brand',CarForUpdate.brand)
    //         setValue('price',CarForUpdate.price)
    //         setValue('year',CarForUpdate.year)
    //         const {data} = await carService.updateById(CarForUpdate.id,CarForUpdate)
    //         // setCar(prev=>[...prev,data]
    //         console.log(data)
    // }


    console.log(CarForUpdate);

    useEffect(   () => {
            if (CarForUpdate){

                setValue('brand', CarForUpdate.brand)
                setValue('price', CarForUpdate.price)
                setValue('year', CarForUpdate.year)
                carService.updateById(CarForUpdate.id, CarForUpdate)
                const {data} = carService.getAll()
                console.log(data);
                setCar((prev)=>[...prev,data])
            }

    }, [CarForUpdate])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <span>{errors.brand.messages}</span>}
                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <span>{errors.price.messages}</span>}
                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <span>{errors.year.messages}</span>}
                <button disabled={!isValid}>{CarForUpdate?'Update':'Save'}</button>
            </form>
        </div>
    );
};

export default CarForm;