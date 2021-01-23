import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { FormGroup, Button, TextField, makeStyles } from "@material-ui/core";

const CardDetails = ({ updateItems, employeeList }) => {
  const { id } = useParams();
  const [edit, setEdit] = useState(false);

  const useStyles = makeStyles({
    formstyle: {
      marginTop: "15px",
    },
  });
  const a = useStyles();

  return (
    <section>
      <h1
        style={{
          fontSize: "30px",
          marginBlock: 20,
        }}
      >
        Cards Details - {id}
      </h1>

      {edit ? (
        <Formik
          initialValues={{
            id: id,
            name: "",
            age: "",
            country: "",
            position: "",
            wage: "",
          }}
          onSubmit={updateItems}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormGroup>
                <Field
                  name="name"
                  type="input"
                  label="Name"
                  variant="outlined"
                  className={a.formstyle}
                  as={TextField}
                />
                <Field
                  name="age"
                  type="number"
                  label="Age"
                  variant="outlined"
                  className={a.formstyle}
                  as={TextField}
                />
                <Field
                  name="country"
                  type="input"
                  label="Country"
                  variant="outlined"
                  className={a.formstyle}
                  as={TextField}
                />
                <Field
                  name="position"
                  type="input"
                  label="Position"
                  variant="outlined"
                  className={a.formstyle}
                  as={TextField}
                />
                <Field
                  name="wage"
                  type="input"
                  label="Wage"
                  variant="outlined"
                  className={a.formstyle}
                  as={TextField}
                />

                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      marginBlock: "1rem",
                      marginInlineEnd: "1rem",
                      paddingInline: "1.5rem",
                    }}
                    onClick={() => setEdit(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    style={{ marginBlock: "1rem", paddingInline: "2rem" }}
                    onClick={() => setEdit(true)}
                  >
                    Save
                  </Button>
                </div>
              </FormGroup>
            </Form>
          )}
        </Formik>
      ) : (
        <div className="details">
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginBlock: "1rem", paddingInline: "2rem" }}
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
        </div>
      )}
    </section>
  );
};
export default CardDetails;
