import React,{useState,useEffect} from "react";
import { deleteData } from "../database/Data";
import "./TableBody.css";

function TableBody({changeAddEmployeeIsOpen,tempData1,relodFunction,editButtonClick}) {
  const [data,setData] = useState(tempData1);
    const addEmployeeBtnClick=()=>{
        changeAddEmployeeIsOpen();
    }
    useEffect(() => {
      console.log(tempData1);
    }, [tempData1])
    const deleteButtonClick = (id) =>{
      let tempData =  deleteData(id);
      relodFunction();
    }
    const tempEditButtonClick = (tempData)=>{
      editButtonClick(tempData);
    }
  return (
    <div className="main-div-table-body">
      <div>
        <div className="first-div-table-body">
          <div></div>
          <div>
            <button className="add-employee-button-table-body" onClick={addEmployeeBtnClick}>Add Employee</button>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Skills</th>
              <th>Action</th>
            </thead>
            <tbody className="table-body-content-div">
              
            {tempData1.map((data,index) => (
              <tr key={data.toString()+index}>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.department}</td>
                <td>{data.selectedSkill.map((items)=>(
                    items + ", " 
                ))}</td>
                <td><button onClick={()=>tempEditButtonClick(data)}>Edit</button><button onClick={()=>deleteButtonClick(data.id)}>Delete</button></td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableBody;
