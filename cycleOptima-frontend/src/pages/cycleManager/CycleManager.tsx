import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "../../components/ui/placeholders-and-vanish-input";

function CycleManager() {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", inputVal);
    // You can add more logic here like searching or saving
  };

  return (
    <div className=" w-full h-full flex flex-col  ">
      <div className=" w-full flex flex-row items-center ">
        <PlaceholdersAndVanishInput
          placeholders={[
            "Search Cycle Name",
            "Search Comments",
            "Type and press Enter",
          ]}
          onChange={(e) => setInputVal(e.target.value)}
          onSubmit={handleSubmit}
        />
      </div>
      {/* DropDownBox  */}
    </div>
  );
}

export default CycleManager;
