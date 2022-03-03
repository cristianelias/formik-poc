// Dependencies
import { Field, useField, ErrorMessage } from "formik";
import { Input, Button } from "@nextui-org/react";

const MyField = ({ label, placeholder, name }) => {
  const { setTouched } = useField(name)[2];

  const inputProps = {
    label,
    placeholder,
    name,
  };

  return (
    <Field name={name}>
      {({ field: { value, onChange }, meta: { error } }) => {
        if (value.length >= 1) {
          inputProps.value = value;
        }

        return (
          <>
            <Input
              css={{ "margin-top": "10px" }}
              clearable
              bordered
              onChange={(e) => {
                setTouched(name, true);
                onChange(e);
              }}
              {...inputProps}
              color={error ? "error" : ""}
            />
            <ErrorMessage name={name}>
              {(msg) => (
                <Button
                  type="button"
                  color="error"
                  flat
                  css={{ margin: "10px 0 5px" }}
                >
                  {msg}
                </Button>
              )}
            </ErrorMessage>
          </>
        );
      }}
    </Field>
  );
};

export default MyField;
