import React, { useState,useEffect } from "react";
import data, { updateData } from "../database/Data";
import "./AddEmployeeFrom.css";

function AddEmployeeForm({ changeAddEmployeeIsOpen, submitButtonClick1, formData }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("PHP");
  const [skills, setSkills] = useState(new Array(8).fill(false));
  const [about, setAbout] = useState("");
  useEffect(()=>{
    if(formData.id){
      editAllData(formData)
    }
  },[]);
  
  const arrayOfSkills = [
    "Programming",
    "Communication",
    "Finance",
    "Recruitment",
    "Optimization",
    "App Development",
    "Frontend Technology",
    "Backend Technology",
  ];
  const editAllData = (formData) =>{
    setFname(formData.fname);
    setLname(formData.lname);
    setEmail(formData.email);
    setPhoneNumber(formData.phoneNumber);
    setAbout(formData.about);
    setGender(formData.gender);
    setDepartment(formData.department);
    let tempSkills = skills;
    let tempSkillsName = formData.selectedSkill;
    console.log(tempSkillsName);
    for(let i=0;i<arrayOfSkills.length;i++){
      if(tempSkillsName.includes(arrayOfSkills[i])){
        tempSkills[i] = true;
      }
    }
    setSkills(tempSkills);
  }
  const backButtonClick = () => {
    changeAddEmployeeIsOpen();
  };

  // submit button click start
  const submitButtonClick = () => {
      const selectedSkill = [];
      skills.map((item, index) => {
        if (item) selectedSkill.push(arrayOfSkills[index]);
      });
      const dataForSubmit = {
        fname,
        lname,
        email,
        phoneNumber,
        gender,
        selectedSkill,
        department,
        about,
      }
      if(formData.id){
        dataForSubmit.id = formData.id;
      }
      submitButtonClick1(dataForSubmit);
      changeAddEmployeeIsOpen();
  };
   // submit button click end

  // for radio button start
  const radioButtonChange = (e) => {
    console.log("radio button change : ");
    console.log(e.target.value);
    setGender(e.target.value);
  };
  // for radio button end
  
  // for checkbox start
  const checkboxClick = (position) => {
    console.log("check box :", position);
    const updatedCheckedState = skills.map((item, index) =>
      index === position ? !item : item
    );
    console.log(skills);
    console.log(updatedCheckedState);
    setSkills(updatedCheckedState);

    console.log(skills);
  };
  // for checkbox end
  return (
    <div className="main-div-add-employee-form">
      <div className="first-main-div-add-employee-form">
        <div>
          <label htmlFor="fname">First Name *</label>
          <br />
          <input
            type="text"
            value={fname}
            id="fname"
            onChange={(e) => {
              setFname(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="lname">Last Name *</label>
          <br />
          <input
            type="text"
            id="lname"
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="pnumber">Phone Number *</label>
          <br />
          <input
            type="number"
            id="pnumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Gender : </label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={radioButtonChange}
            checked={gender=="male" && gender!=""?"true":(false)}
          />
          <label htmlFor="male"> Male </label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={radioButtonChange}
            checked={gender=="female" && gender!=""?"true":(false)}
          />
          <label htmlFor="female"> Female </label>
        </div>
        <div>
          <label htmlFor="department">Department : </label>
          <select
            id="department"
            value={department}
            onChange={(e) => {setDepartment(e.target.value)}} 
          >
            <option value="choose...">Choose...</option>
            <option value="PHP">PHP</option>
            <option value=".NET">.NET</option>
            <option value="SEO">SEO</option>
            <option value="Mobile">Mobile</option>
            <option value="Admin/HR">Admin/HR</option>
            <option value="Account">Account</option>
          </select>
        </div>
        <div>
          <p>Skills : </p>
          <div className="dropdown-div-add-employee-table">
            {arrayOfSkills.map((data, index) => (
              <div className="checkBoxDiv" key={data}>
                <input
                  type="checkbox"
                  id={`checkbox_id_${data}`}
                  name="backend_tech"
                  value="backend_tech"
                  onChange={() => checkboxClick(index)}
                  checked={skills[index]==true?"true":(false)}
                />
                <label htmlFor={`checkbox_id_${data}`} >{data}</label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="about">About :</label>
          <br />
          <textarea
            type="textarea"
            id="about"
            value={about}
            onChange={(e) => {
              setAbout(e.target.value);
            }}
          >
          </textarea>
        </div>
        <div className="two-button-input-form">
          <button onClick={backButtonClick} className="defaultButton">
            Back
          </button>
          <button onClick={submitButtonClick} className="defaultButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployeeForm;
