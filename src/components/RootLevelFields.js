// Dependencies
import { Card } from "@nextui-org/react";

// Components
import Heading from "./Heading";
import MyField from "./MyField";

const RootLevelFields = () => (
  <>
    <Heading text={"Root level"} />
    <Card css={{ margin: "0px 0px 15px" }}>
      <MyField
        name="first_input"
        label={"First input"}
        placeholder="Please type whatever is in your head"
      />

      <MyField
        name="second_input"
        label={"Second input"}
        placeholder="Please type whatever is in your head"
      />
    </Card>
  </>
);

export default RootLevelFields;
