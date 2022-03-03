const nestedItemsInitialValues = {
  name: "",
  last_name: "",
  age: "",
};

const nestedItemsInputMetadata = {
  name: {
    placeholder: "Please enter the name",
    label: "Name",
  },
  last_name: {
    placeholder: "Please enter the last name",
    label: "Last name",
  },
  age: {
    placeholder: "Please enter the age",
    label: "Age",
  },
};

const initialValues = {
  first_input: "",
  second_input: "",
  nested: [nestedItemsInitialValues],
};

export default {
  nestedItemsInitialValues,
  initialValues,
  nestedItemsInputMetadata,
};
