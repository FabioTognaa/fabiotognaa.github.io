//* CARD DEI LINGUAGGI DI PROGRAMMAZIONE SEZIONE SKILLS

function SkillCard({ title, description, icons }) {
  return (
    <div className="mx-auto h-full max-w-lg overflow-hidden rounded-xl border border-blue-300 bg-transparent shadow-md transition-all duration-200 ease-in-out hover:shadow-xl/20">
      <div className="h-full md:flex">
        <div className="flex flex-row items-center justify-around gap-3 border-r border-blue-300 p-4 md:shrink-0 md:flex-col md:justify-center">
          {icons.map((icon) => (
            <img src={icon.src} alt="icon.alt" className="mb-2 h-auto w-14" />
          ))}
        </div>
        <div className="p-8 pt-5">
          <h2 className="mt-1 block text-4xl leading-tight font-medium">
            {title}
          </h2>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default SkillCard;
