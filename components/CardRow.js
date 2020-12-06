import Card, { CardPost } from "./Card";

import _ from "lodash";
export default function CardRow({ data, projects }) {
  const chunkedProjectData = projects
    ? _.chunk(
        data.filter((ele) => ele.featured),
        2
      )
    : _.chunk(
        data.filter((ele) => ele.title),
        2
      );
  console.log(data);
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

      {!projects &&
        chunkedProjectData.map((row, index) => {
          return (
            <div className="tile is-parent " key={index}>
              {row.map((col, index) => {
                return <CardPost post={col} key={index} />;
              })}
            </div>
          );
        })}
    </div>
  );
}
