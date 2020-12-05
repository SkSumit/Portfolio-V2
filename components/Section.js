import React from "react";

export default function Section(props) {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container is-fluid">{props.children}</div>
      </div>
    </section>
  );
}
