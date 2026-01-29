import React from "react";
function ProjectCard({ project }) {
  const { title, description, link } = project;
  const workInProgress = title === "";
  return workInProgress ? (
    <div className="m-8 flex animate-pulse items-center justify-center rounded-lg border border-blue-900 p-10 md:p-18 text-xl font-medium text-blue-900 md:m-0">
      <h1 className="text-lg md:text-3xl ">Work in progress...</h1>
    </div>
  ) : undefined;
}
export default ProjectCard;
