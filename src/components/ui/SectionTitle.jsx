//* TITOLO DI OGNI SEZIONE

function SectionTitle({ label }) {
  return (
    <h1
      id={`${label}`}
      className="mt-20 ml-8 scroll-mt-28 text-6xl font-light md:ml-16 md:text-7xl"
    >
      {label}
    </h1>
  );
}
export default SectionTitle;
