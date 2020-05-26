const validPhoneNumber = (phoneNumber)=>{
    const reg = /^[0]\d{10}$/;
    return reg.test(phoneNumber)
}

const normalTextField = (string)=>{
    const reg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return reg.test(string.trim())
}

const emailValidator = (string)=>{
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return reg.test(string)
}


export const validators = {
    emailValidator,
    textValidator: normalTextField,
    phoneNumberValidator: validPhoneNumber,
}

export const getStateFomart = (stateArray)=>{
    const formartArray = stateArray.map(state=>{
        return {
            display: state.charAt(0).toUpperCase() + state.substr(1),
            value: state.toLowerCase(),
        }
    })
    return formartArray;
}