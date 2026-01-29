import jsIcon from "../../assets/javascript-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import nodeIcon from "../../assets/nodejs-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import javaIcon from "../../assets/java-icon.svg";
import cppIcon from "../../assets/cpp-icon.svg";
import cIcon from "../../assets/c-icon.svg";
import gitIcon from "../../assets/github-icon.svg";
import pythonIcon from "../../assets/python-icon.svg";
import SkillCard from "../ui/SkillCard";
import SectionTitle from "../ui/SectionTitle";
function SkillSection() {
  const skillsData = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Solida padronanza di HTML, CSS e JavaScript per la creazione di interfacce utente dinamiche e responsive.",
      icons: [
        { src: jsIcon, alt: "JavaScript", width: "w-14" },
        { src: htmlIcon, alt: "HTML5", width: "w-14" },
        { src: cssIcon, alt: "CSS3", width: "w-14" },
      ],
    },
    {
      id: 2,
      title: "Framework & Librerie",
      description:
        "Esperienza con Node.js per il Back-End, React per lo sviluppo di componenti dinamici e Tailwind CSS per lo styling rapido.",
      icons: [
        { src: nodeIcon, alt: "Node.js" },
        { src: tailwindIcon, alt: "Tailwind" },
        { src: reactIcon, alt: "React" },
      ],
    },
    {
      id: 3,
      title: "Back-End Development",
      description:
        "Solide basi in C, C++ e Java, essenziali per la programmazione di sistemi, la comprensione di strutture dati e algoritmi.",
      icons: [
        { src: javaIcon, alt: "Java" },
        { src: cppIcon, alt: "C++" },
        { src: cIcon, alt: "C" },
      ],
    },
    {
      id: 4,
      title: "Version Control & API",
      description:
        "Competenza nell'uso di Git per il versionamento, conoscenza di Python collegamenti API tra applicazioni.",
      icons: [
        { src: gitIcon, alt: "Git" },
        { src: pythonIcon, alt: "Python" },
      ],
    },
  ];
  return (
    <div id="skills" className="scroll-mt-28">
      <SectionTitle label="Skills" class />
      <section className="mx:8 mt-12 mb-20 md:mx-16 md:mt-0">
        <h1 className="mt-20 mb-20 hidden text-center text-xl font-light md:block md:text-3xl">
          Ottime competenze in molti linguaggi di programmazione.
        </h1>
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-2">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              icons={skill.icons}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
export default SkillSection;
