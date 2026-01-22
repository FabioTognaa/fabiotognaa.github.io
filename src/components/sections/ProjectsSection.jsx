import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

//*SEZIONE DEI MIEI PROGETTI PERSONALI
function ProjectsSection() {
  //? MODIFICA I DATI IN BASE ALLA STRUTTURA DELLA FUTURA CARD PER I PROGETTI
  const projects = [
    {
      id: 1,
      title: "",
      description: "Project Description 1",
      link: "",
    },
    { id: 2, title: "", description: "Project Description 2", link: "" },
    {
      id: 3,
      title: "",
      description: "Project Description 3",
      link: "",
    },
  ];

  return (
    <div id="projects" className="mt-30 scroll-mt-28">
      <SectionTitle label="Projects" />
      <section className="mt-10">
        <div className="flex flex-row items-center justify-around gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
export default ProjectsSection;
