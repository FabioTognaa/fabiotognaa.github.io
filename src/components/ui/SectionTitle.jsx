//* TITOLO DI OGNI SEZIONE

function SectionTitle({ label }) {
  return (
    <h1
      id={`${label}`}
      className="mt-20 ml-16 scroll-mt-28 text-7xl font-light"
    >
      {label}
    </h1>
  );
}
export default SectionTitle;
