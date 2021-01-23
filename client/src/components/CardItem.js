import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const CardItem = ({ val, DeleteItem }) => {
  return (
    <div className="card">
      <Link to={`/cards/${val.id}`}>
        <ul>
          <li>Name: {val.name}</li>
          <li>Age: {val.age}</li>
          <li>Country: {val.country}</li>
          <li>Position: {val.position}</li>
          <li>Wage: {val.wage}</li>
        </ul>
      </Link>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ marginBlock: "1rem" }}
        onClick={() => DeleteItem(val.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default CardItem;
