import React, { useEffect, useState, Suspense } from 'react';
import StyledManageStaff, { StyledManageStaffHeader, StyledManageStaffTab, StyledPagination } from '../styled/StyledManageStaff';
import StyledCard from '../styled/StyledCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import ExpandableSearch from '../components/ExpandableSearch';
import Table from '../components/Table';
import { STAFF_TABLE_ORDER, STAFF_HEADER, staff } from '../constants/table';
import Pagination from '../components/Pagination';
import { StyledPopup, StyledPopupContent } from '../styled/StyledPopup';
const AddStaff = React.lazy(() => import('../components/AddStaff'));
const PAGE = 10;

function ManageStaffs(){
    useEffect(()=>{
        document.title = "Manage Staffs"
    },[])

    let [selectedStaff,setSelectedStaff] = useState([]);
    let [currentData,setCurrentData] = useState(staff.slice(0,PAGE));

    const [showAddStaff,setShowAddStaff] = useState(false);

    const handlePagination = (page)=>{
        let startIndex = (page-1) * PAGE;
        let data = staff.slice(startIndex,startIndex + PAGE);
        console.log(currentData,data)
        setCurrentData([...data])
    }

    const handleSelection = (selected,...selectedIds)=>{
        if(selected){
            let unique = new Set([...selectedStaff,...selectedIds])
            setSelectedStaff(Array.from(unique))
        }else{
            let ids = selectedStaff;
            selectedIds.forEach(id => {
                let index = ids.indexOf(id);
                if(index >= 0){
                    ids.splice(index,1)
                }
            });
            setSelectedStaff([...ids])
        }

    }

    const handleShowAddStaff = ()=>{
        setShowAddStaff(true);
    }

    return (
            <StyledManageStaff>
                <StyledCard>
                <StyledManageStaffHeader>
                    <div className="Left">
                        <h3>Staff</h3>
                        {
                            selectedStaff.length > 0 &&
                            <span className = "M-L-10">
                                {
                                    `(${selectedStaff.length} selected)`
                                }
                            </span>
                        }
                    </div>
                    <div className="Right">
                        <ExpandableSearch placeholder = "Search staff" className = "M-R"/>
                        <Button onClick = {handleShowAddStaff}>
                            <Icon classNames = {['M-R-10','I-16']} icon = 'add'/>
                            <p className = "Text">Add new staff</p>
                        </Button>
                    </div>
                </StyledManageStaffHeader>
                <StyledManageStaffTab>
                    <div className="TableContainer">
                    <Table selectedIds = {selectedStaff} handleSelection = {handleSelection} allData = {staff} data = {currentData} dataHeader = {STAFF_HEADER} dataKeyOrder = {STAFF_TABLE_ORDER}/>
                    </div>
                </StyledManageStaffTab>
                <StyledPagination>
                        <div>
                        <Pagination onPageChange = {handlePagination} itemNo = {staff.length} numberPerPage = {PAGE}/>
                        </div>
                </StyledPagination>
                </StyledCard>
                {
                    showAddStaff &&
                    <Suspense fallback = {<div></div>}>
                        <AddStaff onClose = {()=>setShowAddStaff(false)}/>
                    </Suspense>
                }
            </StyledManageStaff>
    )
}

export default ManageStaffs;