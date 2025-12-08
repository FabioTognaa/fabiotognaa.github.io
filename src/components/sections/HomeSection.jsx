import Header from "../ui/Header";
import AsideBar from "../ui/AsideBar";
function HomeSection() {
  return (
    <section className="m-0 h-screen" id="home">
      <Header />
      <AsideBar />
      <div className="flex h-full w-full flex-col items-center justify-center px-4 text-center tracking-wider text-[#0a2342] md:text-left">
        <h1 className="animate-fade-in-slide-up text-3xl font-semibold opacity-0 delay-500 md:text-4xl">
          Ciao, sono Fabio Tognarelli!
        </h1>
        <p className="animate-fade-in-slide-up mt-4 mb-4 text-base font-light opacity-0 delay-700 md:text-lg">
          Sono uno studente di informatica presso l'università degli studi di
          Pisa. Questo è il mio sito web personale.
        </p>
        <a
          className="mt-4 p-2 text-lg no-underline transition-all duration-150 ease-out hover:scale-110 hover:cursor-pointer hover:rounded-[3rem] hover:bg-[#0a2342] hover:px-6 hover:py-2 hover:font-semibold hover:text-white md:m-0 md:mr-6 md:p-0"
          href="#about"
        >
          Cliccami
        </a>
      </div>
    </section>
  );
}
export default HomeSection;
