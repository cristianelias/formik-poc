import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  first_input: Yup.string().required("This tiny winy field is required"),
  second_input: Yup.string().required("This tiny winy field is required"),

  nested: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Item name is required"),
      last_name: Yup.string().required("Last name is required"),
      age: Yup.number()
        .required("Age is required")
        .typeError("Age must be a number"),
    })
  ),
});

export default validationSchema;
