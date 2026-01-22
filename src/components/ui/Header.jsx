import Navbar from "./Navbar.jsx";

//*HEADER FISSO IN ALTO
function Header() {
  //*Sinistra: download cv e link per form contatti
  const navItemsSx = [
    {
      label: "Contattami",
      href: "", // Rotta futura per la pagina contatti
      type: "link",
    },
    {
      label: "Scarica CV",
      href: "/cv-tognarelli-fabio.pdf", // Percorso del file
      type: "download", // Flag per attivare il download
    },
  ];

  //* Destra: Ancore per lo scroll della pagina
  const navItemsDx = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" }, // href pulito senza spazi
    { label: "Skills", href: "#skills" },
    { label: "Contatti", href: "#contatti" }, // Esempio: scrolla al footer
  ];
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-20 w-full items-center justify-between px-4 text-[1rem] font-black shadow-xl/10 backdrop-blur-lg md:h-24 md:px-12">
      <Navbar items={navItemsSx} />
      <Navbar items={navItemsDx} />
    </header>
  );
}
export default Header;
