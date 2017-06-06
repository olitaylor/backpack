import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M12.966 21c.548 0 1.092-.208 1.481-.614l5.492-5.746a3.816 3.816 0 0 0 0-5.28l-5.492-5.746c-.716-.748-1.958-.823-2.775-.17-.818.655-.9 1.792-.185 2.54l5.492 5.746c.121.126.121.413 0 .539l-5.492 5.745c-.715.749-.632 1.885.185 2.54.373.299.834.446 1.294.446zm-6.711-1.865l4.297-4.495a3.82 3.82 0 0 0 0-5.28L6.255 4.865a1.889 1.889 0 1 0-2.731 2.611l4.067 4.255a.394.394 0 0 1 0 .539l-4.068 4.255a1.89 1.89 0 1 0 2.732 2.61z" /></svg>;
  }

}