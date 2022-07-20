import React, { useEffect, useRef } from "react";
import { mount } from "marketing/Marketing";

export default () => {
  const refDiv = useRef(null)
  useEffect(() => {
    mount(refDiv.current)
  })

  return (
    <div ref={refDiv}></div>
  )
}