//* SINGOLO ELEMENTO DELLA NAVBAR

function NavItem({ item }) {
  const { label, href, type } = item;
  const isDownload = type === "download"; //* Verifica se è un link di download
  return (
    <a
      className="cursor-pointer text-center no-underline transition-all duration-200 ease-in-out hover:scale-110 hover:px-[18px] hover:py-[5px] hover:text-[#0a2342]"
      href={href}
      download={isDownload ? "cv-TOGNARELLI-FABIO.pdf" : undefined}
    >
      {label}
    </a>
  );
}
export default NavItem;
