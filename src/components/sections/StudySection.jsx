import SectionTitle from "../ui/SectionTitle.jsx";
import SchoolCard from "../ui/SchoolCard.jsx";
import FermiIcon from "../../assets/logo-fermi.svg";
import UnipiIcon from "../../assets/logo-unipi.svg";
function StudySection() {
  const schools = [
    {
      src: FermiIcon,
      title: "Polo tecnico scientifico E.Fermi",
      date: "Lucca, Sept 2019 - Jun 2024",
      descr: "Diploma in tecnologie informatiche",
    },
    {
      src: UnipiIcon,
      title: "Università degli studi di Pisa",
      date: "Pisa, Sept 2024 - Now",
      descr: " Laurea triennale in Computer Science",
    },
  ];
  return (
    <>
      <SectionTitle
        key="percorso-studi"
        section="Percorso di Studi:"
      />
      <section className="mx-16 mt-24 mb-80 flex h-3/4 gap-4">
        {schools.map((school, index) => (
          <SchoolCard
            key={index}
            school={school.src}
            title={school.title}
            date={school.date}
            descr={school.descr}
          />
        ))}
      </section>
    </>
  );
}
export default StudySection;
