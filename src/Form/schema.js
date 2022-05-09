import Schema from "./Schema/Schema";

export const schema = new Schema({
    username: {
        type: 'string',
        validators: {min : 5, max : 15},
        message: '',
        value: ''
    },
    email: {
        type: 'string',
        validators: 'email',
        message: '',
        value: ''
    },
    password: {
        type: 'string',
        validators: { min: 4, max: 20 },
        message: '',
        value: ''
    },
    confirmPassword: {
        type: 'string',
        validation: 'confirmPassword',
        message: '',
        value: ''
    }}
);