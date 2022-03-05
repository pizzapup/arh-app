import ReactColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";
import React from "react";
function ColorPick() {
  const [color, setColor] = React.useState({
    hue: 200,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const onInput = (hue) => {
    setColor({ ...color, hue });
  };

  return (
    <div>
      <ReactColorPicker {...color} onInput={onInput} />
      {/* <ReactColorPicker onInput={(hue) => alert("Current color:", { hue })} /> */}
    </div>
  );
}
export default ColorPick;
