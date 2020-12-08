import React from "react";

export default function Section(props) {
  return (
    <section className={`hero ${props.fullheight ? "is-fullheight" :""}`}>
      <div className="hero-body">
        <div className="container ">{props.children}</div>
      </div>
    </section>
  );
}
