import React, { useState, useEffect, useRef } from 'react';
import StyledPagination from '../styled/StyledPagination';
import Icon from './Icon';
import {themed} from '../constants/theme';
import _ from 'lodash'

const iconStyle = (isActive)=>({
    color: isActive ? themed.primaryC: '#ced1d8'
})

const Forward = ({isActive,...props})=>(
    <span className = "Pager Flex-C">
     <Icon style = {iconStyle(isActive)} {...props} icon = "chevron_right"/>
    </span>
)

const TwiceForward = ({onClick,isActive,...props})=>{
    return (
        <span className = "Pager Flex-C S" onClick = {onClick}>
            <Icon style = {iconStyle(isActive)} {...props} icon = "chevron_right"/>
            <Icon style = {iconStyle(isActive)} icon = "chevron_right"/>
        </span>
    )
    
}
const Backward = ({isActive,...props})=>(
    <span className = "Pager Flex-C">
     <Icon style = {iconStyle(isActive)} {...props} icon = "chevron_left"/>
    </span>
)
const TwiceBackward = ({onClick,isActive,...props})=>{
    return (
        <span className = "Pager Flex-C S" onClick = {onClick}>
            <Icon style = {iconStyle(isActive)} {...props} icon = "chevron_left"/>
            <Icon style = {iconStyle(isActive)} {...props} icon = "chevron_left"/>
        </span>
    )
}




const Pagination = ({itemNo, numberPerPage, onPageChange})=>{
    let pages = new Array(Math.ceil(itemNo/numberPerPage)).fill(null);
    const [currentPage, setCurrentPage] = useState(1),
    [pageTo,setPageTo] = useState(''),
    LENGTH = pages.length,
    shouldTwiceBackward = currentPage > 2,
    shouldBackward = currentPage > 1,
    shouldForward = (LENGTH - currentPage) >= 1,
    shouldTwiceForward = (LENGTH - currentPage) >= 2,
    isFirstRender = useRef(true);
   
    const handlePageInputChange = (e)=>{
        let value = e.target.value,
        valueTosSetTo = _.clamp(value,1,LENGTH)
        setPageTo(value);
        setCurrentPage(valueTosSetTo)
    }
    useEffect(()=>{
        if(isFirstRender.current){
            isFirstRender.current = false;
        }else{
            onPageChange && onPageChange(currentPage)
        }
    },[currentPage]);

    return (
        <StyledPagination>
            <div className="Back">
                <TwiceBackward onClick = {()=>{
                  shouldTwiceBackward &&  setCurrentPage(Math.max(currentPage-2,0))
                }} isActive = {shouldTwiceBackward}/>
                <Backward onClick = {()=>{
                   shouldBackward && setCurrentPage(Math.max(currentPage-1,0))
                }} isActive = {shouldBackward}/>
            </div>
                <div className="Pages">
                    {
                        pages.map((page,index)=>{
                            return (
                                <div 
                                key = {index}
                                onClick = {()=>{
                                    setCurrentPage(index + 1)
                                }} className={`Page Ripple Flex-c ${currentPage === index + 1 ? 'Selected':''}`}>
                                    <p className = "Flex-C">{index+1}</p>
                                </div>
                            );
                        })
                    }
                </div>
            <div className="Forward">
                <Forward onClick = {()=>{
                   shouldForward && setCurrentPage(Math.min(currentPage+1,LENGTH))
                }} isActive = {shouldForward}/>
                <TwiceForward onClick = {()=>{
                   shouldTwiceForward && setCurrentPage(Math.min(currentPage+2,LENGTH))
                }} isActive = {shouldTwiceForward}/>
            </div>
            <div className="SelectPage">
                    <p className = "M-R-10">Go to page</p>
                    <input value = {pageTo} type = "number" onChange = {handlePageInputChange} className="EnterPage"/>
            </div>
        </StyledPagination>
    );
}

export default Pagination;