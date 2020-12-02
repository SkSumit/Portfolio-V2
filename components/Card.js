import React from "react";
import Icons from "./Icons";

export default function Card({ project }) {
  console.log(project);
  return (
    <div className="tile is-parent is-fixed-size">
      <div className="tile is-child box">
        <div className="columns is-multiline">
          <div className="column is-12">
            <p className="title is-3">{project.fields["Project Name"]}</p>
          </div>

          <div className="column is-12">
            {project.fields["Technology Used"].map((tech, index) => {
              return (
                <p className="tag mr-2 is-danger is-light" key={index}>
                  {tech}
                </p>
              );
            })}
          </div>

          <div className="column is-12">
            <p className="subtitle is-5 has-text-weight-light is-family-secondary mt-2">
              {project.fields.TagLine}
            </p>

            {Icons("github", project.fields.Github)}
            {project.fields.Demo && Icons("url", project.fields.Demo)}
          </div>
        </div>
      </div>
    </div>
  );
}
