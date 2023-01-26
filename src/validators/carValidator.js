import Joi from "joi"



const carValidator=Joi.object({
    brand:Joi.string().required(),
    price:Joi.number().min(0).max(100000),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})


export {
    carValidator
}