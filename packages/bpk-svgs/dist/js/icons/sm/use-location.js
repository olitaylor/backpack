function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M20.5 10.5h-1.7c-.6-2.7-2.7-4.8-5.3-5.3V3.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v1.7c-2.7.6-4.8 2.7-5.3 5.3H3.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h1.7c.6 2.7 2.7 4.8 5.3 5.3v1.7c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.7c2.7-.6 4.8-2.7 5.3-5.3h1.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm-7 6.2c-.5.2-1 .3-1.5.3s-1-.1-1.5-.3C9 16.3 7.7 15 7.3 13.5c-.2-.5-.3-1-.3-1.5s.1-1 .3-1.5C7.7 9 9 7.7 10.5 7.3c.5-.2 1-.3 1.5-.3s1 .1 1.5.3c1.5.5 2.8 1.7 3.2 3.2.2.5.3 1 .3 1.5s-.1 1-.3 1.5c-.4 1.5-1.7 2.8-3.2 3.2zM14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" /></svg>;
