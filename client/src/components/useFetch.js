import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [isLoading, setisLoading] = useState(true);
  const [employeeList, setEmployeesList] = useState([]);
  //const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(url);
        console.log(res.data);
        setEmployeesList(res.data);
        setisLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();

    //abort fetch
  }, [url]);

  return { employeeList, isLoading };
};

export default useFetch;
