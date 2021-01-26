import React from "react";
import SkeletonCards from "../skeletons/SkeletonCards";
import CardItem from "./CardItem";
// import Loading from "./Loading";

const CardList = ({ employeeList, isLoading, DeleteItem }) => {
  return (
    <section>
      <div className="cards">
        {isLoading && [1, 2, 3, 4, 5].map((n) => <SkeletonCards key={n} />)}
      </div>
      {!isLoading && (
        <div className="cards">
          {employeeList.map((val) => (
            <CardItem key={val.id} val={val} DeleteItem={DeleteItem}></CardItem>
          ))}
        </div>
      )}
    </section>
  );
};

export default CardList;
