import React, {useState,useRef, useReducer, useEffect} from 'react';
import { StyledPopup, StyledPopupContent } from '../styled/StyledPopup';
import Input from './Input';
import '../css/AddStaff.css';
import Icon from './Icon';
import Button from './Button';
import Select from './Select';
import { useTransition, animated, useSpring } from 'react-spring';
import { sub, classes } from '../constants/subjects';
import Tag from './Tag';
import Notification from './Notification';
import SelectBox from './SelectBox';
import { validators } from '../utils/appUtils';
import { genderOpt, stateOpt } from '../constants/appConst';


const textAction = (text,field)=>({
    type: "SET_FIELD_TEXT",
    payload: {
        field,
        text,
    }
})


const AddStaff = ({onClose})=>{
    const containerRef = useRef(null);
    const [currentPage,setCurrentPage] = useState(1);
    const [showAddPermissionsPage,setShowAddPermissionsPage] = useState(false);
    const [matchedTyped,setMatchedType] = useState([]);
    const [selectedSujects,setSelectedSubjects] = useState([]);
    const [showSelectNotification,setShowSelectNotification]= useState(false);
    const [showSaveErrorNotification,setShowSaveErrorNotification]= useState(false);
    const [typedSubject,setTypedSubject] = useState("");
    const [selectedClasses,setSelectedClasses] = useState([]);
    const [image,setImage] = useState("");

    const [state,dispatch] = useReducer((state,action)=>{
        switch(action.type){
            case "SET_FIELD_TEXT":
                let {field,text} = action.payload;
                return {
                    ...state,
                    [field]: text 
                }
            default:
                return state;
        }
    },{
        phoneNumber: 0,
        email: "",
        lastName: "",
        address: "",
        gender: "",
        age: "",
        firstName: "",
        state: ""
    })

    const setErrorOnNonFilledFields = ()=>{
        let newState = {
            phoneNumber: !validators.phoneNumberValidator(state.phoneNumber),
            email: !validators.emailValidator(state.email),
            age: !validators.textValidator(state.age),
            gender: !validators.textValidator(state.gender),
            address: !validators.textValidator(state.address),
            firstName: !validators.textValidator(state.firstName),
            lastName: !validators.textValidator(state.lastName),
            state: !validators.textValidator(state.state)
        }
        setErrorFields(newState);
        return newState;
    }

    const transitions = useTransition(showAddPermissionsPage,null,{
        from: {
            top: '100%'
        },
        enter:{
            top: '0%'
        },
        leave:{
            top: '100%'
        }
    })

    const [slideStyle,setSlideStyle] = useSpring(()=>({transform: 'translate(0px)', config: {
        tension: 250
    }}))

    const handleNext = (goto)=>{
        slide(goto)
        setCurrentPage(goto)
    }

    const slide = (page)=>{
        let target = containerRef.current,
        WIDTH = target.getBoundingClientRect().width,
        translateTo = - WIDTH * page;
        setSlideStyle({transform: `translateX(${translateTo}px)`})
        setShowSelectNotification(false)
    }
    
    const handleSubjectInputChange = (text)=>{
        setTypedSubject(text);
        text = text.toLowerCase();
        setShowSelectNotification(false);
        if(text.length === 0){
            setMatchedType([])
            return;
        }
        let matches = sub.filter(item=>{
            let subText = item.text.toLowerCase();
            return subText.includes(text);
        })
        setMatchedType([...matches])
    }

    const onSelect = (selected)=>{
        let shouldNotClick = (selectedSujects.some(subject=>subject.text === selected.text))
        if(shouldNotClick){
            setShowSelectNotification(true);
            return;
        };
        setShowSelectNotification(false)
        setTypedSubject("")
        setMatchedType([])
        setSelectedSubjects(selectedSubjects=>[...selectedSubjects,selected]);
    }

    const removeSubject = (selected)=>{
        let index = selectedSujects.findIndex(subject=>subject.text === selected.text),
        array = selectedSujects;
        array.splice(index,1);
        setSelectedSubjects([...array])
    }

    const clearAllAndClose = ()=>{
        setShowAddPermissionsPage(false);
        setTypedSubject("");
        setShowSelectNotification(false);
        setMatchedType([]);
        setSelectedSubjects([]);
        setSelectedClasses([])
    }

    const [errorFields, setErrorFields] = useState({
        email: null,
        gender: null,
        phoneNumber:null,
        age: null,
        state:null,
        firstName: null,
        lastName:null,
        address: null
    })


    const checkForAnyError = (errorFields)=>{
        return Object.values(errorFields).includes(true);
    }

    const handlePageSubmit = ()=>{
        const errors = setErrorOnNonFilledFields();
        // if(checkForAnyError(errors)) return
        handleNext(1);
    }

    const addClass = (clas,add)=>{
        let s = clas.class;
        let classes = selectedClasses,
        index = classes.findIndex(x=>x.class === s);

        if(add){
            if(index>=0) return;
            setSelectedClasses(sC=>[...sC,clas])
        }else{
            if(index>=0){
                classes.splice(index,1);
                setSelectedClasses([...classes])
            }
        }
    }

    const savePermission = ()=>{
        if(selectedClasses.length <= 0){
            setShowSaveErrorNotification(true);
            return
        }
        clearAllAndClose();
    }

    const onImageChange = (value)=>{
        console.log(value)
        setImage(value)
    }

    return (
        <StyledPopup onClick = {onClose}>
            <StyledPopupContent onClick = {(e)=>e.stopPropagation()}>
                <div className="AddStaff">
                    <animated.div ref = {containerRef} style = {slideStyle} className="Form">
                        <Page closePage = {onClose} title = "Staff Personal Info">
                            <div className="Content">
                                <div className="Fields Grid-2">
                                    <Input error = {errorFields.firstName} handleChange = {(text)=>{
                                        dispatch(textAction(text,'firstName'));
                                    }} placeHolder = "First Name"/>
                                    <Input error = {errorFields.lastName} handleChange = {(text)=>{
                                        dispatch(textAction(text,'lastName'));
                                    }} placeHolder = "Last Name"/>
                                </div>
                                <div className="Fields Grid-2">
                                    <Input error = {errorFields.email} handleChange = {(text)=>{
                                        dispatch(textAction(text,'email'));
                                    }} placeHolder = "Email ID"/>
                                    <Input error = {errorFields.phoneNumber} handleChange = {(text)=>{
                                        dispatch(textAction(text,'phoneNumber'));
                                    }} placeHolder = "Phone Number"/>
                                </div>

                                <div className="Fields Grid-2">
                                    <Input error = {errorFields.address} handleChange = {(text)=>{
                                        dispatch(textAction(text,'address'));
                                    }} placeHolder = "Address"/>
                                    <div className="Fields Grid-2 M-0">
                                        <Input error = {errorFields.age} handleChange = {(text)=>{
                                        dispatch(textAction(text,'age'));
                                    }} type = "number" placeHolder = "Age"/>
                                        <Select error = {errorFields.gender} handleChange = {(option)=>{
                                            dispatch(textAction(option.value))
                                        }} options = {genderOpt} placeHolder = "Gender"/>
                                    </div>
                                </div>
                                <div className="Fields Grid-2">
                                    <div className = "PhotoSelect">
                                        <input onChange = {onImageChange} type="file"/>
                                        <div className="ToShow">
                                            <p>Add Staff Photo</p>
                                            <Icon icon = "camera"/>
                                        </div>
                                    </div>
                                    <Select error = {errorFields.state} handleChange = {(option)=>{
                                            dispatch(textAction(option.value))
                                    }}  options = {stateOpt} placeHolder = "State of Origin"/>
                                </div>
                            </div>
                            <div className="Actions">
                                <button className = "PageButton">
                                    Reset
                                </button>
                                <Button onClick = {handlePageSubmit} type = "secondary">
                                    <p className = "Text M-R-10">Next</p>
                                    <Icon icon = "trending_flat"/>
                                </Button>
                            </div>
                        </Page>

                        <Page closePage = {onClose} title = "Account Permissions">
                            <div className="Content">
                                <div className="Desc">
                                    <p>Add Permissions to the account being created, You can select subjects and corresponding classes where the account being created is permitted to perform operations</p>
                                </div>
                                <div className = "Info">
                                        <div className = "InfoHeader">
                                            <Icon icon = "star"/>
                                            <h3 className = "M-L-10">Know That</h3>
                                        </div>
                                        <div className="InfoDetails">
                                            <p>This is a <b>NOT</b> mandatory step. You can always set up <b>Account Permissions</b> at a later time. <br/>Click <b>Add Permissions</b> to set permissions now or <b>Finish</b> to complete.</p>
                                        
                                        </div>
                                </div>
                            </div>
                            <div className="Actions">
                                <Button onClick = {()=>setShowAddPermissionsPage(true)} type = "secondary">
                                    <Icon icon = "add"/>
                                    <p className = "Text M-L-10">Add Permissions</p>
                                </Button>
                                <Button onClick = {()=>handleNext(2)}  type = "secondary">
                                    <p className = "Text M-R-10">Finish</p>
                                    <Icon icon = "trending_flat"/>
                                </Button>
                            </div>
                            {
                                transitions.map(({item,props,key})=>
                                    item &&
                                    <animated.div key = {key} style = {props} className="AddPermissions Scroll-Y">
                                        <div className="PageHeader">
                                            <h1>Create Permission</h1>
                                            <div onClick = {clearAllAndClose} className = "Icon Flex-C">
                                                <Icon icon = 'close'/>
                                            </div>
                                        </div>
                                        <div className="PermissionsContent">
                                            <div className="InputField">
                                            <Input fieldValue = {typedSubject} controlled = {true} icon = "search" handleChange = {handleSubjectInputChange} placeHolder = "Type in a Subject"/>
                                            </div>
                                            <div className="SelectedSubjects">
                                                {
                                                    selectedSujects.map((selectedSubject,index)=>(
                                                    <div className="TagContainer">
                                                        <Tag onClick = {removeSubject} tagObject = {selectedSubject} selector = {false}/>
                                                    </div>
                                                    ))
                                                }
                                            </div>
                                            { 
                                                matchedTyped.length > 0 &&
                                                    <div className="Suggestions">
                                                    <p>Suggested Subjects</p>
                                                    <div>
                                                    {
                                                        matchedTyped.map((matched,index)=>(
                                                            <div className = "TagContainer">
                                                                <Tag onClick = {onSelect} tagObject = {matched} key = {index}/>
                                                            </div>
                                                        ))
                                                    }
                                                    </div>
                                                </div>
                                            }
                                            {
                                                selectedSujects.length > 0 &&
                                                <div className="AddClasses">
                                                    <h3>Select class(es)</h3>
                                                    <p>The selected class(es) is where the created account can perform operation(s) on the selected subject(s)</p>
                                                    <div class = "ClassSelection">
                                                        {
                                                            classes.map((clas,index)=>(
                                                                <div className="Box">
                                                                    <SelectBox onSelect ={(checked)=>{
                                                                        addClass(clas,checked)
                                                                    }} key = {index}>
                                                                        <p>{clas.class}</p>
                                                                    </SelectBox>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                            }
                                            {
                                                <div className="SavePermission">
                                                    {
                                                        selectedSujects.length > 0 &&
                                                        <Button onClick = {savePermission}>
                                                            {/* <Icon icon = "file"/> */}
                                                            <p className = "Text">Save Permission</p>
                                                        </Button>
                                                    }
                                                </div>
                                            }
                                        </div>
                                        <Notification onClose= {()=>setShowSelectNotification(false)} show = {showSelectNotification} text = "Subject selected already, select another"/>
                                        <Notification onClose= {()=>setShowSaveErrorNotification(false)} show = {showSaveErrorNotification} text = "You haven't selected a class, select at least one class"/>
                                    </animated.div>
                                )
                            }
                        </Page>
                        <Page closePage = {onClose} title = "Finish">

                        </Page>
                    </animated.div>
                </div>
            </StyledPopupContent>
        </StyledPopup>
    );
}

const Page = ({children, title, closePage})=>{
    return (
        <div className="Page">
            <div className="PageHeader">
                <h1>{title}</h1>
                <div onClick = {closePage} className = "Icon Flex-C">
                    <Icon icon = 'close'/>
                </div>
            </div>
            <div className="PageContent">
                {children}
            </div>
        </div>
    );
}

export default AddStaff;