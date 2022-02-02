import React from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

import MyField from "./MyField";

import "./MyForm.css";

const nestedItemsInitialValues = {
  itemName: "",
  quantity: "",
  price: "",
};

const validationSchema = Yup.object().shape({
  flat: Yup.string().required("This tiny winy flat field is required"),
  nested: Yup.array().of(
    Yup.object().shape({
      itemName: Yup.string().required("Item Name is Required"),
      quantity: Yup.number()
        .required("Qty is Required")
        .typeError("Qty must be a number"),
      price: Yup.number()
        .required("Price is Required")
        .typeError("Price must be a number"),
    })
  ),
});

const invoiceData = {
  flat: "Hi, I'm really easy to get along with...",
  nested: [nestedItemsInitialValues],
};

const MyForm = () => (
  <>
    <Formik
      initialValues={invoiceData}
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
        <Form className="form-component">
          <section className="nested-fields">
            <FieldArray name="nested">
              {({ push, remove }) => (
                <>
                  <div className="nested-fields__title-and-buttons">
                    <h1>Nested fields</h1>

                    <div className="nested-fields__buttons">
                      <button
                        className="button button--new-group"
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          push(nestedItemsInitialValues);
                        }}
                      >
                        + New group
                      </button>

                      <button className="button button--submit" type="submit">
                        Send it
                      </button>
                    </div>
                  </div>
                  {values.nested.map((item, index) => (
                    <fieldset key={index} className="nested-fields__fieldset">
                      {Object.keys(item).map((inputName) => (
                        <MyField
                          key={`${index} x ${inputName}`}
                          inputName={`nested[${index}].${inputName}`}
                          labelText={inputName}
                        />
                      ))}
                      <button
                        type="text"
                        className="button button--delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          remove(index);
                        }}
                      >
                        Delete
                      </button>
                    </fieldset>
                  ))}
                </>
              )}
            </FieldArray>
          </section>

          <section className="flat-fields">
            <h1 className="flat-fields__title">Flat fields</h1>
            <MyField inputName="flat" labelText="flat" />
          </section>

          <section className="formik-values">
            <h1 className="formik-values__title">Formik values</h1>
            <pre className="formik-values__pre">
              {JSON.stringify(values, null, 2)}
            </pre>
          </section>
        </Form>
      )}
    </Formik>
  </>
);

export default MyForm;
