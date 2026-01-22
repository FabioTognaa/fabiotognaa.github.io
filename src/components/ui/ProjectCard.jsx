import React from "react";
function ProjectCard({ project }) {
  const { title, description, link } = project;
  const workInProgress = title === "";
  return workInProgress ? (
    <div className="flex animate-pulse items-center justify-center rounded-lg border border-blue-900 p-18 text-xl font-medium text-blue-900">
      <h1>Work in progress...</h1>
    </div>
  ) : undefined;
}
export default ProjectCard;
