import "./App.css";
import React, { useState, useEffect } from "react";
import FormList from "./components/FormList";
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
//import useFetch from "./components/useFetch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import CardDetails from "./components/CardDetails";

const App = () => {
  const [url] = useState("http://localhost:3001");
  const [isLoading, setisLoading] = useState(true);
  const [employeeList, setEmployeesList] = useState([]);
  const [update, setUpdate] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(`${url}/employees`);
        console.log(res.data);
        setEmployeesList(res.data);
        setisLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
    //abort fetch
  }, [url, update]);

  const DeleteItem = (id) => {
    const newEmployee = employeeList.filter(
      (employeeList) => employeeList.id !== id
    );
    setEmployeesList(newEmployee);
    const res = axios
      .delete(`${url}/api/delete/${id}`)
      .then(() => {
        console.log("Item deleted", res.data);
      })
      // Handle Error Here
      .catch((err) => console.error(err));
  };

  const postItems = async (data, { setSubmitting, resetForm }) => {
    try {
      const res = await axios.post(`${url}/insert`, data);
      setSubmitting(true);
      console.log(res.data);
      setSubmitting(false);
      resetForm();
      setUpdate(data); //To re-render list card page
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  };

  const updateItems = async (data) => {
    try {
      const res = await axios.put(`${url}/update`, data);
      console.log(res.data);
      setUpdate(data);
      alert("Success");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <FormList url={url} postItems={postItems} show={show} />
            </Route>

            <Route path="/list">
              <h3 className="card-title">List item</h3>
              <CardList
                isLoading={isLoading}
                employeeList={employeeList}
                DeleteItem={DeleteItem}
              />
            </Route>

            <Route exact path="/cards/:id">
              <CardDetails
                employeeList={employeeList}
                updateItems={updateItems}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
