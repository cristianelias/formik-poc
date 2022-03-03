// Dependencies
import { NextUIProvider } from "@nextui-org/react";
import { css } from "@emotion/react";
import { Global } from "@emotion/react";

// Components
import MyForm from "./MyForm";

const App = () => (
  <NextUIProvider>
    <Global
      styles={css`
        body {
          min-width: 330px;
        }
      `}
    />
    <MyForm />
  </NextUIProvider>
);

export default App;
