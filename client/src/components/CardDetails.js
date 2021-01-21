import { useParams } from "react-router-dom";

const CardDetails = ({ employeeList }) => {
  const { id } = useParams();

  return (
    <section>
      <h1>Cards Details - {id}</h1>
      <div className="cards">
        {employeeList
          .filter((val) => val.id.toString() === id.toString())
          .map((newval) => (
            <ul>
              <li>Name: {newval.name}</li>
              <li>Age: {newval.age}</li>
              <li>Country: {newval.country}</li>
              <li>Position: {newval.position}</li>
              <li>Wage: {newval.wage}</li>
            </ul>
          ))}
      </div>
    </section>
  );
};

export default CardDetails;
