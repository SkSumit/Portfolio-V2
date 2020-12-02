import React from "react";
import CardRow from "./CardRow";
export default function Cards(props) {
  return (
    <div>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          <CardRow />
        </div>
      </div>
    </div>
  );
}
