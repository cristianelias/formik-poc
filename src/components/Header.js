// Dependencies
import { Button, Row } from "@nextui-org/react";

// Components
import Heading from "./Heading";

const Header = () => {
  return (
    <Row
      justify="space-between"
      align="center"
      wrap="wrap"
      css={{
        padding: "0 15px",
        background: "#ffffff0f",
        position: "fixed",
        "z-index": "9999",
        "backdrop-filter": "blur(9px)",
        "box-shadow": "rgb(99 99 99 / 20%) 0px 2px 8px 0px",
        "min-width": "330px",
      }}
    >
      <Heading text={"Formik"} size={60} />
      <Button shadow color="primary" auto type="submit">
        Submit
      </Button>
    </Row>
  );
};
export default Header;
