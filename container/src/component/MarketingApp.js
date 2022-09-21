import React, { useEffect, useRef } from "react";
import { mount } from "marketing/Marketing";
import { useHistory } from "react-router-dom";

export default () => {
  const refDiv = useRef(null);
  //history of browser container
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(refDiv.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        //if current pathname in browser history is different from marketing pathname navigate to the next path name
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    //whenever the path changes we want to automatically call the onParentNavigate func
    history.listen(onParentNavigate);
  }, []);

  return <div ref={refDiv}></div>;
};
