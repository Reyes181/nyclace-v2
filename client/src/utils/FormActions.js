export const validate = (element, formdata=[]) => {
    let error = [true,''];
    
    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Must be valid email':''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.phone){
        const phone = element.value;
        const phoneNUM = phone.replace(/[^\d]/g, '');
        const valid = /^-?[0-9]\d*\.?\d*$/.test(phoneNUM).length === 10
        const message = `${phoneNUM.length === 10 & valid ? '' : 'Must be valid phone number'}`;
        // error = phoneNUM.length === 10 & valid ? error : [valid,message]
        error = !valid & phoneNUM.length !== 10 ? [valid, message] : error;
    }

    if(element.validation.zipcode){
        const zipcode = element.value;
        const zipcodeNUM = zipcode.replace(/[^\d]/g, '');
        const valid = /^-?[0-9]\d*\.?\d*$/.test(zipcodeNUM)
        const message = `${zipcodeNUM.length === 5 & valid ? '' : 'Must be valid zipcode'}`;
        error = zipcodeNUM.length === 5 ? error : [valid,message]
        // error = !valid & phoneNUM.length === 10 ? [valid, message] : error;
    }

    if(element.validation.password){
        const pass = element.value 
        const valid = pass.length >= 6;
        const message = `${!valid ? 'Password must be at least 6 characters': ''}`;
        error = !valid ? [valid,message] : error;
    }

    if(element.validation.cardNumber){
        const cardnumber = element.value;
        var regexCard = new RegExp("^[0-9]{16}$");
        const valid = regexCard.test(cardnumber);
        const message = `${!valid ? 'Not a valid card number' : ''}`;
        error = !valid ? [valid,message] : error
    }

    if(element.validation.ccv){
        const ccvNum = element.value;
        var regexCCV = new RegExp("^[0-9]{3}$");
        const valid = regexCCV.test(ccvNum);
        const message = `${!valid ? 'Enter a 3 digit CCV' : ''}`;
        error = !valid ? [valid,message] : error
    }
    
    if(element.validation.confirm){
        const valid = element.value.trim() === formdata[element.validation.confirm].value;
        const message = `${!valid ? 'Passwords do not match':''}`;
        error = !valid ? [valid,message] : error;
    }
    
    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message] : error;
    }
    
    return error
}


export const update = (element, formdata, formName) => {
    
    const newFormdata = {
        ...formdata
    }
    
    const newElement = {
        ...newFormdata[element.content]
    }
    
    newElement.value = element.value;
        
    if(element.focus){
        let validData = validate(newElement,formdata);
        
        newElement.valid = validData[0];
        
        newElement.validationMessage = validData[1];
       
    }
    
    newElement.touched = element.focus;
    
    newFormdata[element.content] = newElement;

    return newFormdata;
}

export const generateData = (formdata, formName) => {
    let dataToSubmit = {};
    
    for(let key in formdata){
        if(key !== 'confirmPassword'){
            dataToSubmit[key] = formdata[key].value;
        }
    }
    
    return dataToSubmit;
}

export const isFormValid = (formdata, formName) => {
    let formIsValid = true;

    for(let key in formdata){
        formIsValid = formdata[key].valid && formIsValid
    }
    return formIsValid;

}