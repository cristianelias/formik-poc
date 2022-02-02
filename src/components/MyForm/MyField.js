import { Field, useField, ErrorMessage } from "formik";

const MyField = ({ labelText, inputName }) => {
  const { setTouched } = useField(inputName)[2];

  return (
    <Field name={inputName}>
      {({ field: { value, onChange } }) => (
        <div className="field-component">
          <label htmlFor={inputName}>
            <strong className="field-component__text">{labelText}</strong>
          </label>
          <input
            className="field-component__input"
            name={inputName}
            onChange={(e) => {
              setTouched(inputName, true);
              onChange(e);
            }}
            value={value}
          />
          <ErrorMessage name={inputName}>
            {(msg) => <div className="field-component__error">{msg}</div>}
          </ErrorMessage>
        </div>
      )}
    </Field>
  );
};

export default MyField;
