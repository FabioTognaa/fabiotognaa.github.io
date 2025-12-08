function SchoolCard({ school, title, date, descr }) {
//* CARD PER LA SCUOLA DELLA SEZIONE PERCORSO STUDI 

  return (
    <div className="flex flex-1 justify-start gap-10 rounded-lg p-6 transition-all duration-200 ease-in-out hover:shadow-xl/20">
      <img src={school} alt="school logo" className="my-0 ml-0 h-full w-1/5" />
      <div className="">
        <h1 className="text-3xl">{title}</h1>
        <h2 className="font-semibold">{date}</h2>
        <p className="mt-1 text-lg font-light">{descr}</p>
      </div>
    </div>
  );
}
export default SchoolCard;
