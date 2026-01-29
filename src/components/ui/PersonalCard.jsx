import meAcquerelli from "../../assets/me-acquerelli.svg";
import NavButton from "./NavButton";
//*CARD PERSONALE CON FOTO E LINK PER DOWNLOAD CV

function PersonalCard() {
  return (
    <div className="hidden md:flex max-w-sm flex-1 flex-col justify-center rounded-lg border border-blue-300 p-3 text-center transition-all duration-200 ease-in-out hover:shadow-xl/20">
      <div className="mt-3 flex justify-center">
        <img className="h-auto w-50" src={meAcquerelli} alt="foto me stesso" />
      </div>
      <div className="mt-5 mb-0 p-0">
        <span className="text-2xl font-semibold">Fabio Tognarelli</span>
      </div>
      <div className="m-2">
        <a
          className="m-0 inline-block w-3/4 rounded-full border-2 border-blue-300 px-2.5 py-1 text-center text-lg font-semibold text-[#0a2342] transition-all duration-100 ease-linear hover:scale-105 hover:bg-blue-300 hover:text-gray-100"
          href="/cv-tognarelli-fabio.pdf"
          download="/cv-tognarelli-fabio.pdf"
        >
          Scarica CV
        </a>
      </div>
    </div>
  );
}
export default PersonalCard;
