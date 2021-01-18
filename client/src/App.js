import "./App.css";
import React, { useState, useEffect } from "react";
import FormList from "./components/FormList";
import CardList from "./components/CardList";
import Navbar from "./components/Navbar";
//import useFetch from "./components/useFetch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [url] = useState("http://localhost:3001");
  const [isLoading, setisLoading] = useState(true);
  const [employeeList, setEmployeesList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:3001/employees");
        console.log(res.data);
        setEmployeesList(res.data);
        setisLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();

    //abort fetch
  }, []);

  const DeleteItem = (id) => {
    const newEmployee = employeeList.filter(
      (employeeList) => employeeList.id !== id
    );
    setEmployeesList(newEmployee);
    const res = axios
      .delete(`http://localhost:3001/api/delete/${id}`)
      .then(() => {
        console.log(res.data);
        alert("Success Deleted");
      })
      // Handle Error Here
      .catch((err) => console.error(err));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <FormList url={url} />
            </Route>
            <Route path="/list">
              <h3 className="card-title">Card List</h3>
              <CardList
                isLoading={isLoading}
                employeeList={employeeList}
                DeleteItem={DeleteItem}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
