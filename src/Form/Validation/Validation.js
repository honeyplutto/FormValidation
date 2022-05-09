export const validationUsername = ( username, extra, message=`Field will contain min 5 character and max 15` ) => {
    if (username){
        if(username.length <= extra.min || username.length >= extra.max){
            return {isValid: false, message: message};
        }
        return {isValid: true, message: ''};
    }
    return {isValid: false, message: 'Field is required'};
}

export const validationEmail = ( email, message=`Email wasn't correct` ) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email) {
        if(!regex.test(email)){
            return {isValid: false, message: message};
        }
        return {isValid: true, message: ''};
    }
    return {isValid: false, message: 'Field is required'};
}

export const validationPassword = ( password, extra, message=`Field will contain min 5 character and max 19` ) => {
    if(password){
        if(password.length <= extra.min || password.length >= extra.max){
            return {isValid: false, message: message};
        }
        return {isValid: true, message: ''};
    }
    return {isValid: false, message: 'Field is required'};
}

export const validationConfPassword = ( password, confirmPassword, message=`Confirm Password wasn't correct` ) => {
    if(confirmPassword){
        if(!password || password.length < 4 || password.length > 20){
            return {isValid: false, message: ` Password contain wasn't correct`};
        }
        if(password !== confirmPassword){
            return {isValid: false, message: message};
        }
        return {isValid: true, message: ''};
    }
    return {isValid: false, message: 'Field is required'};
}