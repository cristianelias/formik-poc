// Dependencies
import { FieldArray } from "formik";
import { Row, Button, Card } from "@nextui-org/react";

// Components
import Heading from "./Heading";
import MyField from "./MyField";

const NestedFields = ({ initialValues, values }) => (
  <FieldArray name="nested">
    {({ push, remove }) => (
      <>
        <Row justify="space-between" align="center" wrap="wrap">
          <Heading text={"Nested"} />
          <Button
            color="gradient"
            auto
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              push(initialValues.nestedItemsInitialValues);
            }}
          >
            + New group
          </Button>
        </Row>
        {values.nested.map((item, index) => (
          <Card key={index} css={{ margin: "0 0 20px", paddingBottom: "10px" }}>
            <Row justify="space-between" align="center">
              <Heading size={24} text={`Group #${index + 1}`} />
              <Button
                shadow
                color="error"
                auto
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(index);
                }}
              >
                Delete
              </Button>
            </Row>

            {Object.keys(item).map((name) => (
              <MyField
                key={`${index} x ${name}`}
                name={`nested[${index}].${name}`}
                label={initialValues.nestedItemsInputMetadata[name].label}
                placeholder={
                  initialValues.nestedItemsInputMetadata[name].placeholder
                }
              />
            ))}
          </Card>
        ))}
      </>
    )}
  </FieldArray>
);

export default NestedFields;
