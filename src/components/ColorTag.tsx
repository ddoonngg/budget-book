import { Color } from "@material-ui/core";
import React from "react";

interface ColorTagProps {
  color: string;
  size?: number;
}
const ColorTag: React.FC<ColorTagProps> = (props) => {
  const { color, size = "100%" } = props;
  return (
    <div
      style={{
        backgroundColor: color,
        width: 10,
				height: 20,
				display: "inline-block",
				marginRight:10
      }}
    ></div>
  );
};
export default ColorTag;
