import React, {useState} from 'react';
import StyledSelect from '../styled/StyledSelect';
import Icon from './Icon';
import { useOnClickOutside } from '../utils/customHooks';
import { useRef } from 'react';


const Select = ({handleChange,options = [], error = false,errorMessage,placeHolder})=>{
    const [showOpt, setShowOpt] = useState(false);
    const [selected,setSelected] = useState({
        display: ''
    });
    const ref = useRef(null);


    const showOptions = ()=> setShowOpt(true);
    const hideOptions = ()=> setShowOpt(false);

    const handleOptionsVisibility = (e)=>{
        e.stopPropagation();
        showOpt ? hideOptions():showOptions();
    }

    const handleSelect = (e)=>{
        let index = Number(e.target.dataset.id);
        setSelected(options[index])
        let  { value } = options[index];
        handleChange && handleChange(value)
        hideOptions();
    }

    useOnClickOutside(ref, hideOptions)
    return (
        <StyledSelect ref = {ref} error = {error}>
                <div onClick = {handleOptionsVisibility} className="Selector">
                    <div focused = {`${showOpt}`} className = "SelectorDisplay">
                        <div optionselected = {`${!selected.display}`} className = 'PlaceHolder'>
                            {placeHolder}
                        </div>
                        {
                            selected &&
                            <div className = 'Value'>
                                {selected.display}
                            </div>
                        }
                    </div>
                    { 
                        <div className="Icon">
                            {
                                (error !== null && !error) ?
                                <Icon style = {{color: "#1ed47c",fontSize:"16px",width: "6px"}} icon = 'check'/>:
                                <Icon icon = 'arrow_drop_down'/>
                            }
                        </div>
                    }
                </div>
                {
                    showOpt && 
                    <ul className = "Options Scroll-Y">
                        {
                            options.map((option,index)=>{
                                return <li onClick = {handleSelect} key = {index} data-id = {index}>{option.display}</li>
                            })
                        }
                    </ul>
                }
        </StyledSelect>
    );
}

export default Select;