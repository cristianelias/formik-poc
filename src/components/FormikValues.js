// Dependencies
import { Card, Grid } from "@nextui-org/react";
import styled from "@emotion/styled";

// Components
import Heading from "./Heading";

const StyledDiv = styled.div`
  @media (min-width: 960px) {
    margin-top: 54px;
  }
`;

const FormikValues = ({ values }) => (
  <Grid
    xs={12}
    sm={4}
    css={{
      "min-height": "100vh",
      padding: "0px 25px",
    }}
    direction={"column"}
    gap="35px"
  >
    <StyledDiv>
      <Heading text={"Formik values"} />
      <Card>
        <pre>{JSON.stringify(values, null, 2)}</pre>
      </Card>
    </StyledDiv>
  </Grid>
);

export default FormikValues;
