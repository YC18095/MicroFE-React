import React, { useEffect, useRef } from "react";
import { mount } from "../../../marketing/src/bootstrap";

//Not using this components use this for review knowledge
export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};
