import React, { useState, useContext } from 'react';
import StyledTable, { StyledTableRow } from '../styled/StyledTable';
import Checkbox from './Checkbox';
import Icon from './Icon';
import pp from '../images/pp.png'


const Table = ({data = [], allData =[], dataHeader, dataKeyOrder, selectedIds = [], handleSelection,onSelectedProfile})=>{
    const handleRowClick = (selected,rowId)=>{
        handleSelection(selected,rowId)
    }

    const selectAll = (selected)=>{
        const allIds = allData.map((value)=>value.id)
        handleSelection(selected,...allIds)
    }

    return  (
        <StyledTable>
            <table className="Table">
                <colgroup>
                    <col style = {{width: "50px"}}/>
                    <col style = {{width: "10%"}}/>
                    <col style = {{width: "30%"}}/>
                    <col style = {{width: "20%"}}/>
                    <col style = {{width: "25%"}}/>
                    <col style = {{width: "10%"}}/>
                </colgroup>
                <thead>
                <tr className = "TableHeader">
                    <th>
                        <Checkbox checked = {selectedIds.length === allData.length} onCheckChange = {(selected)=>selectAll(selected)}/>
                    </th>
                    {
                        dataKeyOrder.map((order,index)=>{
                            return <th key = {index}>{dataHeader[order]}</th>
                        })
                    }
                    <th>
                        
                    </th>
                </tr>
                </thead>
                <tbody>
                    {
                        data.map((data,index)=>{
                        return <TableRow onSelectedProfile = {onSelectedProfile} onCheck = {(selected,id)=>handleRowClick(selected,id)} selected = {selectedIds.includes(data.id)} key = {index} data = {data}/>
                        })
                    }
                </tbody>
            </table>
        </StyledTable>
    )
}


const TableRow = ({data, onCheck, selected,onSelectedProfile})=>{
    const { firstName, lastName, id, phoneNumber, emailAddress,profilePicture} = data;
    const [showActions,setShowActions] = useState(false);
    

    const handleDelete = (e)=>{
        e.stopPropagation();
    }

    const handleEdit = (e)=>{
        e.stopPropagation();
    }

    const handleOnSelected = (e)=>{
        e.stopPropagation();
        onSelectedProfile(data)
    }

    return (
        <StyledTableRow  onMouseLeave = {()=>{
            showActions && setShowActions(false)
        }} onMouseEnter = {()=>{
            !showActions && setShowActions(true)
        }} selected = {selected} onClick = {handleOnSelected}>
            <td>
                <div className="Checkbox Flex-C">
                <Checkbox checked = {selected} onCheckChange = {(selected)=>onCheck(selected,id)}/>
                </div>
            </td>
            <td>
                <p>{id}</p>
            </td>
            <td>
                <div className="Name">
                <div className="ImageHolder M-R-10">
                    <img src={profilePicture || pp} alt=""/>
                </div>
                <p>{`${firstName} ${lastName}`}</p>
                </div>
            </td>
            <td>
                <p>{phoneNumber}</p>
            </td>
            <td>
                <p>{emailAddress}</p>
            </td>
            <td>
                {
                    showActions ?
                    <div className = "Actions">
                        <div onClick = {handleEdit} className="Button Flex-C">
                        <Icon icon = "create"/>
                        </div>
                        <div onClick = {handleDelete} className="Button Flex-C">
                        <Icon icon = "delete"/>
                        </div>
                    </div>:
                    <Icon style = {{color: '#6e6e71'}} icon = "more_horiz"/>
                }
            </td>
        </StyledTableRow>
    );
}
export default Table;