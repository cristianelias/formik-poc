// Dependencies
import React from "react";
import { Formik, Form } from "formik";
import { Grid } from "@nextui-org/react";

// Components
import FormikValues from "./FormikValues";
import validationSchema from "./data/validationSchema";
import initialValues from "./data/initialValues";
import Header from "./Header";
import RootLevelFields from "./RootLevelFields";
import NestedFields from "./NestedFields";

const MyForm = () => (
  <>
    <Formik
      initialValues={initialValues.initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      validateOnChange={true}
      validateOnBlur={false}
    >
      {({ values }) => (
        <Form>
          <Grid.Container gap="35px" justify="center">
            <Header />
            <Grid
              xs={12}
              sm={8}
              css={{
                "min-height": "50vh",
                "margin-top": "54px",
                padding: " 0px 25px",
              }}
              direction={"column"}
            >
              <RootLevelFields />
              <NestedFields initialValues={initialValues} values={values} />
            </Grid>
            <FormikValues values={values} />
          </Grid.Container>
        </Form>
      )}
    </Formik>
  </>
);

export default MyForm;
