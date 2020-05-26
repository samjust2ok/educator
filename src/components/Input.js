import React, {useState} from 'react';
import StyledInput from '../styled/StyledInput';
import Icon from '../components/Icon';


const Input = ({controlled = false,fieldValue = "",handleChange, error = null, icon, type = 'text',placeHolder})=>{
    const [value, setValue] = useState('');
    const handleInputChange = (e)=>{
        let typed = e.target.value;
        setValue(typed)
        handleChange && handleChange(typed)
    }

    return (
        <StyledInput error = {error}>
                <div className="InputField">
                    <div className = "InputContainer">
                        <input value = {controlled ? fieldValue : value} hasinput = {`${controlled ? fieldValue.length > 0 : value.length > 0}`} onChange = {handleInputChange} type = {type}/>
                        <div>
                            {placeHolder}
                        </div>
                    </div>
                    { 
                        <div className="Icon">
                            {
                                (error !== null && !error) ?
                                <Icon style = {{color: "#1ed47c",fontSize:"16px",width: "6px"}} icon = 'check'/>:
                                icon && 
                                <Icon icon = {icon}/>
                            }
                        </div>
                    }
                </div>
        </StyledInput>
    );
}

export default Input;