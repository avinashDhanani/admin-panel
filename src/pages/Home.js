import React from "react";
import { useState, useEffect } from "react";
import AddEmployeeForm from "../components/AddEmployeeForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TableBody from "../components/TableBody";
import { addData, updateData, paigination, sizeOfData } from "../database/Data";
import "./Home.css";

function Home() {
  const [addEmployeeIsopen, setAddEmployeeIsOpen] = useState(true);
  const [relod, setRelod] = useState(false);
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [pagePerDocument, setpagePerDocument] = useState(3);
  const [nextShow, setNextShow] = useState(true);
  const [prevShow, setPrevShow] = useState(true);
  const [isFirstTimeload, setIsFirstTimeload] = useState(true);
  const [search, setSearch] = useState("");
  const changeAddEmployeeIsOpen = () => {
    setFormData({});
    setAddEmployeeIsOpen(!addEmployeeIsopen);
  };
  useEffect(() => {
    if (isFirstTimeload) {
      setIsFirstTimeload(!isFirstTimeload);
      loadData();
    }
  }, [data]);
  useEffect(() => {
    loadData();
  }, [page, search, pagePerDocument]);
  const loadData = () => {
    const size = sizeOfData(search);
    console.log(page,pagePerDocument);
    const tempData = paigination(page, pagePerDocument, search);
    console.log(tempData);
    setData(tempData);
    if (page == 1) {
      setPrevShow(false);
    } else {
      setPrevShow(true);
    }
    if ((page - 1) * pagePerDocument + pagePerDocument >= size) {
      setNextShow(false);
    } else {
      setNextShow(true);
    }
  };
  const searchFunction = (searchText) => {
    setSearch(searchText);
    setPage(1);
    loadData();
  };
  const prevClick = () => {
    setPage(page - 1);
    loadData();
  };
  const nextClick = () => {
    console.log("next page");
    const tempPage = page;
    setPage(page + 1);
    console.log("next click :- ", page);
    loadData();
  };

  const submitButtonClick = (submitData) => {
    console.log("in home page");
    console.log(submitData);
    if (formData.id == undefined) {
      addData(submitData);
    } else {
      updateData(submitData);
      setFormData({});
    }
    loadData();
  };
  const relodFunction = () => {
    setRelod(!relod);
  };
  const editButtonClick = (tempData) => {
    console.log(tempData);
    setAddEmployeeIsOpen(!addEmployeeIsopen);
    setFormData(tempData);
  };
 
  return (
    <div>
      <Navbar searchFunction={searchFunction} />
      {addEmployeeIsopen ? (
        <div>
          <TableBody
            changeAddEmployeeIsOpen={changeAddEmployeeIsOpen}
            tempData1={data}
            relodFunction={relodFunction}
            editButtonClick={editButtonClick}
          />
          <div className="page-button">
            <div>
              {prevShow ? (
                <button onClick={prevClick} className="page-prev-btn">
                  Prev
                </button>
              ) : (
                <></>
              )}
            </div>
            <div>
              <label htmlFor="department">document per page : </label>
              <select
                id="department"
                value={pagePerDocument}
                onChange={(e) => {
                  setPage(1);
                  const num = Number(e.target.value)
                  setpagePerDocument(num);
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
              </select>
            </div>
            <div>
              {nextShow ? (
                <button onClick={nextClick} className="page-next-btn">
                  Next
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div></div>
        </div>
      ) : (
        <AddEmployeeForm
          changeAddEmployeeIsOpen={changeAddEmployeeIsOpen}
          submitButtonClick1={submitButtonClick}
          formData={formData}
        />
      )}
      <Footer />
    </div>
  );
}

export default Home;
