import React from "react";
import CardItem from "./CardItem";
import Loading from "./Loading";

const CardList = ({ employeeList, isLoading, DeleteItem }) => {
  return isLoading ? (
    <Loading />
  ) : (
    <section>
      <div className="cards">
        {employeeList.map((val) => (
          <CardItem key={val.id} val={val} DeleteItem={DeleteItem}></CardItem>
        ))}
      </div>
    </section>
  );
};

export default CardList;
