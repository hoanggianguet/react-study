import { useState } from "react";
import DropDown from "../components/DropDown";
function DropDownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Red", value: "red" },
    { label: "Red", value: "red" },
    { label: "Red", value: "red" },
    { label: "Red", value: "red" },
    { label: "Red", value: "red" },
    { label: "Red", value: "red" },
    { label: "Red", value: "red" },
  ];
  return (
    <div className="flex">
      <DropDown options={options} value={selection} onChange={handleSelect} />
      {/* <DropDown options={options} value={selection} onChange={handleSelect} />  */}
    </div>
  );
}

export default DropDownPage;
