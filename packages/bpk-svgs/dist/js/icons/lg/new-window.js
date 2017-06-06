import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M16 15.4v3.1c0 .3-.2.5-.5.5h-10c-.3 0-.5-.2-.5-.5v-10c0-.3.2-.5.5-.5h3.1c.2 0 .4-.2.4-.4V6.4c0-.2-.2-.4-.4-.4H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2v-3.6c0-.2-.2-.4-.4-.4h-1.2c-.2 0-.4.2-.4.4zm-4.6-.7l4.6-4.6.3.3 1.2 1.2c.7.7 1.8.5 2-.4L21 4.5c.2-.9-.6-1.7-1.5-1.5l-6.7 1.4c-.9.2-1.1 1.3-.4 2l1.2 1.2.3.4-4.6 4.6c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0z" /></svg>;
  }

}