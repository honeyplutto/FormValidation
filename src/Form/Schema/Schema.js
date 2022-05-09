import { 
    validationUsername, 
    validationEmail, 
    validationPassword, 
    validationConfirmPassword 
} from '../Validation'

export default class Schema {

    constructor(schema){
        this.schema = schema;
    }

    validation = (payload) => {
        return {
            username: validationUsername(
                payload.username, 
                {
                    min: this.schema.username.validators.min, 
                    max: this.schema.username.validators.max
                }
            ),
            email: validationEmail(payload.email),
            password: validationPassword(
                payload.password, 
                {
                    min: this.schema.password.validators.min, 
                    max: this.schema.password .validators.max
                }
            ),
            confirmPassword: validationConfirmPassword(payload.password, payload.confirmPassword)
        }
    }
}
