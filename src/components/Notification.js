import React, { useEffect, useRef } from 'react';
import Icon from './Icon';
import '../css/Notification.css';
import { useTransition, animated } from 'react-spring';


const Notification = ({show,text,onClose = ()=>{}})=>{
    const isRenderedFirst = useRef(true);

    let timeout = null;

    const transitions = useTransition(show,null,{
        from: {
            transform: 'translateY(15px)',
            opacity: 0
        },
        enter: {
            transform: 'translateY(0px)',
            opacity: 1,
        },
        leave: {
            transform: 'translateY(15px)',
            opacity: 0,
        }
    })

    useEffect(()=>{
        if(show){
            timeout = setTimeout(onClose,2000);
        }
        return ()=>timeout && clearTimeout(timeout)
    },[show])

    return (
        transitions.map(({item,props,key})=>(
            item && 
            <animated.div style = {props} key = {key} className = "NotificationWidget">
                <Icon onClick = {()=>{
                    timeout && clearTimeout(timeout)
                    onClose()
                }} icon = "close"/>
                <p className = "Text">
                    {text}
                </p>
            </animated.div>
        ))
    );
}

export default Notification;