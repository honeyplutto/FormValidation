import Schema from "./Schema/Schema";

export const schema = new Schema({
    username: {
        type: 'string',
        validators: {min : 4, max : 16},
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
    confPassword: {
        type: 'string',
        validation: 'confPassword',
        message: '',
        value: ''
    }}
);