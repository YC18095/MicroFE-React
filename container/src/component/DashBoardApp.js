import { mount } from "dashboard/DashBoardApp";
import React, { useEffect, useRef } from "react";

export default () => {
  debugger;
  const refDiv = useRef(null);

  useEffect(() => {
    mount(refDiv.current);
  }, []);

  return <div ref={refDiv}></div>;
};
