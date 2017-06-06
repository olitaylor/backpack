import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M19.355 5.093a5.615 5.615 0 0 0-7.941 0l-7.219 7.219a4.083 4.083 0 1 0 5.775 5.775l7.219-7.219a2.551 2.551 0 1 0-3.609-3.609l-7.219 7.219a1.02 1.02 0 1 0 1.444 1.444l7.219-7.219a.511.511 0 0 1 .722.722l-7.219 7.219a2.043 2.043 0 0 1-2.888-2.888l7.219-7.219a3.574 3.574 0 0 1 5.053 5.053l-7.219 7.219a1.02 1.02 0 1 0 1.444 1.444l7.219-7.219a5.615 5.615 0 0 0 0-7.941z" /></svg>;
  }

}