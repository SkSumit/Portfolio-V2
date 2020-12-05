import Card from "./Card";

import _ from "lodash";
export default function CardRow({ projects }) {
  console.log(projects);
  const chunkedProjectData = _.chunk(
    projects.filter((project) => project.featured),
    2
  );

  return (
    <div>
      {projects &&
        chunkedProjectData.map((row, index) => {
          return (
            <div className="tile is-parent " key={index}>
              {row.map((col, index) => {
                return <Card project={col} key={index} />;
              })}
            </div>
          );
        })}
    </div>
  );
}
