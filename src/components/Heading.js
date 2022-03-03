// Dependencies
import { Text } from "@nextui-org/react";

const Heading = ({ text, size }) => {
  return (
    <Text
      h1
      size={size || 40}
      css={{
        textGradient: "45deg, $purple500 -20%, $pink500 100%",
        "margin-bottom": "10px",
      }}
      weight="bold"
    >
      {text}
    </Text>
  );
};
export default Heading;
