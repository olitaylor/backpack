import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M10 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm.5 3c-.8 0-1.5.7-1.5 1.5v4c0 .3.2.5.5.5h.5l1 5h2l1-5h.5c.3 0 .5-.2.5-.5v-4c0-.8-.7-1.5-1.5-1.5h-3z" /></svg>;
  }

}