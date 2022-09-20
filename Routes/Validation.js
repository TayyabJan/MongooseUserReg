const { required } = require("joi");
const Joi = require("joi");
function regValidation(data) {
    const schema = Joi.object(
        {
            name: Joi
                .string()
                .required()
                .min(3)
                .max(20),
            email: Joi
                .string()
                .email()
                .required(),
            password: Joi
                .string()
                .required()
                .min(3)
                .max(20),
            address: Joi
                .string()
                .min(5)
                .max(100)

        })

        const  valid =schema.validate(data);
        return valid;

    
}

function loginValidation(data){
    const schema = Joi.object(
        {
            email: Joi
                .string()
                .email()
                .required(),
            password: Joi
                .string()
                .required()
                .min(3)
                .max(20)
         

        })

        const  valid =schema.validate(data);
        return valid;

}
module.exports.loginValidation=loginValidation
module.exports.regValidation=regValidation