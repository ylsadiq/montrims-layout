import React, { useRef } from "react";
import BackSvg from "./BackSvg";
import FrontSvg from "./FrontSvg";
import VariablesList from "../../Helper";

const DISBCI01JRF = () => {
  const item = VariablesList();
  const frontRef = useRef(null);
  return (
    <div>
      <div
        className="flex flex-col gap-4 justify-start ml-10 mt-6"
        ref={frontRef}
      >
        <section className="grid grid-cols-8 gap-4">
          {item.map((el) => (
            <FrontSvg data={el} />
          ))}
        </section>

        <section className="grid grid-cols-8 gap-4">
          {item.map((el) => (
            <BackSvg elem={el} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default DISBCI01JRF;
