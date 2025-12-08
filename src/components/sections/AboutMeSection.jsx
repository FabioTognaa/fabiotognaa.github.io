import SectionTitle from "../ui/SectionTitle";
import PersonalCard from "../ui/PersonalCard";
import PersonalDescription from "../ui/PersonalDescription";
function AboutMeSection() {
  return (
    <div id="about" className="m-0 scroll-mt-28 p-0">
      <SectionTitle label="About Me" />
      <section className="m-16 mt-16 mr-36 mb-24 flex h-4/5 gap-10">
        <PersonalCard />
        <PersonalDescription />
      </section>
    </div>
  );
}
export default AboutMeSection;
