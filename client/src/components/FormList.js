import { Formik, Field, Form } from "formik";
import {
  FormGroup,
  Button,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";

const FormList = ({ postItems, show }) => {
  //const [show, setShow] = useState(false);

  const useStyles = makeStyles({
    formstyle: {
      margin: "5px",
    },

    formGroup: {
      alignItems: "center",
    },

    submit: {
      paddingInline: "5.6em",
      marginBlock: "15px",
    },
  });
  const a = useStyles();

  /*   const postItems = async (data, { setSubmitting, resetForm }) => {
    try {
      const res = await axios.post(`${url}/insert`, data);
      setSubmitting(true);
      console.log("Submit", res.data);
      setSubmitting(false);
      resetForm();
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1500);
    } catch (err) {
      console.error(err);
    }
  }; */

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          age: "",
          country: "",
          position: "",
          wage: "",
        }}
        onSubmit={postItems}
      >
        {({ values, isSubmitting }) => (
          <Form className="form-container">
            {show && <div className="success-modal">Successfully Added</div>}
            <Typography className="Text" variant="h3">
              Simple Form
            </Typography>
            <FormGroup className={a.formGroup}>
              <Field
                name="name"
                type="input"
                label="Name"
                variant="outlined"
                as={TextField}
                className={a.formstyle}
              />
              <Field
                name="age"
                type="number"
                label="Age"
                variant="outlined"
                as={TextField}
                className={a.formstyle}
              />
              <Field
                name="country"
                type="input"
                label="Country"
                variant="outlined"
                as={TextField}
                className={a.formstyle}
              />
              <Field
                name="position"
                type="input"
                label="Position"
                variant="outlined"
                as={TextField}
                className={a.formstyle}
              />
              <Field
                name="wage"
                type="input"
                label="Wage"
                variant="outlined"
                as={TextField}
                className={a.formstyle}
              />

              <div>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={a.submit}
                >
                  Submit
                </Button>
              </div>
            </FormGroup>

            <pre className="text-container">
              {JSON.stringify(values, null, 2)}
            </pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormList;
