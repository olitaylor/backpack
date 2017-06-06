import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M12.464 7.031l1.28 2.594 2.862.416a.489.489 0 0 1 .271.834l-2.071 2.019.489 2.851a.49.49 0 0 1-.71.516l-2.56-1.346-2.56 1.346a.49.49 0 0 1-.71-.516l.489-2.851-2.071-2.019a.489.489 0 0 1 .271-.834l2.862-.416 1.28-2.594a.49.49 0 0 1 .878 0zM21.231 12c0 .875.953 1.864.737 2.671-.223.835-1.549 1.214-1.972 1.945-.429.742-.099 2.078-.701 2.679-.602.602-1.938.272-2.68.701-.731.423-1.11 1.749-1.945 1.972-.807.216-1.796-.737-2.671-.737s-1.864.953-2.671.737c-.835-.223-1.214-1.549-1.945-1.972-.742-.429-2.078-.099-2.679-.701-.602-.602-.272-1.938-.701-2.679-.423-.731-1.749-1.11-1.972-1.945-.215-.807.738-1.796.738-2.671s-.953-1.864-.737-2.671c.223-.835 1.549-1.214 1.972-1.945.429-.742.099-2.078.701-2.679.602-.602 1.938-.272 2.68-.701.731-.423 1.11-1.749 1.945-1.972.806-.216 1.795.737 2.67.737s1.864-.953 2.671-.737c.835.223 1.214 1.549 1.945 1.972.742.429 2.078.099 2.679.701.602.602.272 1.938.701 2.68.423.731 1.749 1.11 1.972 1.945.216.806-.737 1.795-.737 2.67zM19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" /></svg>;
  }

}