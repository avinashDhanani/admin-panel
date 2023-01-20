import { Component } from "react";

let id = 0;
const data = [
  {
    fname: "Avinash",
    lname: "Dhanani",
    email: "avinash123@gmail.com",
    phoneNumber: "9104136213",
    gender: "male",
    selectedSkill: ["Programming", "Finance", "Recruitment"],
    department: "PHP",
    about: "avinash is good guy",
    id: 1,
  },
  {
    fname: "Hitesh",
    lname: "Rathod",
    email: "hitesh123@gmail.com",
    phoneNumber: "8102030405",
    gender: "male",
    selectedSkill: ["Programming", "Finance", "Backend Technology"],
    department: ".NET",
    about: "it`s second good guy in office.",
    id: 2,
  },
  {
    fname: "Deep",
    lname: "Patel",
    email: "deep@gmail.com",
    phoneNumber: "9192939495",
    gender: "male",
    selectedSkill: ["Programming"],
    department: ".NET",
    about: "it`s third good guy.",
    id: 3,
  },
  {
    fname: "Jaydeep",
    lname: "Vaghela",
    email: "jaydeep@gmail.com",
    phoneNumber: "8182838485",
    gender: "male",
    selectedSkill: ["Programming", "Communication", "Backend Technology"],
    department: ".NET",
    about: "it`s forth good person in office.",
    id: 4,
  },
  {
    fname: "Jesalmam",
    lname: "Desai",
    email: "jesalmam@gmail.com",
    phoneNumber: "8182838485",
    gender: "female",
    selectedSkill: [
      "Programming",
      "Communication",
      "Frontend Technology",
      "Backend Technology",
    ],
    department: "Admin/HR",
    about: "she is good teacher.",
    id: 5,
  },

  {
    fname: "Padmavathimam",
    lname: "Bindulal",
    email: "padmavathimam@gmail.com",
    phoneNumber: "1234567890",
    gender: "female",
    selectedSkill: [
      "Programming",
      "Communication",
      "Optimization",
      "App Development",
      "Backend Technology",
    ],
    department: "Admin/HR",
    about: "she is good mentor.",
    id: 6,
  },
  {
    fname: "QWE",
    lname: "EWD",
    email: "avinash123@gmail.com",
    phoneNumber: "1234567890",
    gender: "male",
    selectedSkill: ["Programming", "Optimization"],
    department: "PHP",
    about: "afhjjp'o;lukjth",
    id: 7,
  },
];

const idCheck = () => {
  let length = data.length;
  if (length == 0) {
    id = 1;
  } else {
    id = data[length - 1].id + 1;
  }
};

const addData = (tempData) => {
  idCheck();
  tempData.id = id;
  console.log(tempData);
  data.push(tempData);
};

const deleteData = (id) => {
  let index = 0;
  for (let i = 0; i < data.length; i++) {
    if (id == data[i].id) {
      index = i;
    }
  }
  data.splice(index, 1);
  return data;
};

const updateData = (tempData) => {
  let index = 0;
  console.log(tempData);
  for (let i = 0; i < data.length; i++) {
    if (tempData.id == data[i].id) {
      index = i;
      console.log("match");
      console.log(index);
    }
  }
  data[index] = tempData;
  console.log(data);
};

const sizeOfData = (search) => {
  const tempDataSearch = [];
  for (let i = 0; i < data.length; i++) {
    if (isContainVariable(data[i], search)) {
      tempDataSearch.push(data[i]);
    }
  }
  return tempDataSearch.length;
};
const isContainVariable = (tempData, tempSearchText) => {
  tempData = JSON.stringify(tempData).toLowerCase();
  if (tempData.includes(tempSearchText.toLowerCase())) {
    return true;
  }
  return false;
};
const paigination = (regex, limit, search) => {
  const tempDataSearch = [];
  console.log(regex, limit, search);
  for (let i = 0; i < data.length; i++) {
    if (isContainVariable(data[i], search)) {
      tempDataSearch.push(data[i]);
    }
  }
  const subArray = [];
  regex = regex - 1;
  limit = Number(limit);
  console.log(regex * limit, regex * limit + limit);
  for (
    let i = regex * limit;
    i < regex * limit + limit && i < tempDataSearch.length;
    i++
  ) {
    subArray.push(tempDataSearch[i]);
  }
  console.log(subArray);
  return subArray;
};

export { addData };
export { deleteData };
export { updateData };
export { paigination };
export { sizeOfData };
export default data;
