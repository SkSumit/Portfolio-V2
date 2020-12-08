import React from "react";
import Icons from "./Icons";

export default function Card({ project }) {
  return (
    <div className="tile is-parent is-fixed-size">
      <div className="tile is-child box">
        <div className="columns is-multiline">
          <div className="column is-12">
            <p className="title is-3">{project.name}</p>
          </div>

          <div className="column is-12">
            {project.techStack.map((tech, index) => {
              return (
                <p className="tag mr-2 is-danger is-light" key={index}>
                  {tech}
                </p>
              );
            })}
          </div>

          <div className="column is-12">
            <p className="subtitle is-5 has-text-weight-light is-family-secondary mt-2">
              {project.description}
            </p>

            {Icons("github", project.github)}
            {project.url && Icons("url", project.url)}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardPost({ post }) {
  
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={post.postURL}
      className="tile is-parent is-fixed-size"
    >
      <div className="tile is-child box">
        <div className="columns is-multiline">
          <div className="column is-12">
            <p className="title is-3">{post.title}</p>
          </div>

          <div className="column is-12">
            {post.categories.map((category, index) => {
              return (
                <p className="tag mr-2 is-danger is-light" key={index}>
                  {category}
                </p>
              );
            })}
          </div>

          <div className="column is-12">
            <figure className="image is-2by1">
              <img src={post.thumbnail} />
            </figure>
          </div>
        </div>
      </div>
    </a>
  );
}
