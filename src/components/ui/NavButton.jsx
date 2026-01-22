function NavButton({ href, label, className = "" }) {
  // Definiamo lo stile "Pieno" (Bottone) in una variabile per non ripeterlo
  const buttonStyle =
    "bg-[#0a2342] text-white rounded-[3rem] px-6 py-2 font-semibold";

  // Definiamo lo stile "Link semplice" per desktop
  const linkStyle =
    "md:bg-transparent md:text-gray-800 md:p-0 md:rounded-none md:font-normal hover:bg-[#0a2342] hover:text-gray-100 hover:px-6 hover:py-2 hover:font-semibold hover:rounded-[3rem]";

  // Combiniamo tutto:
  // 1. Base (comune a tutti)
  // 2. Mobile (che usa lo stile bottone di default)
  // 3. Desktop (che resetta a link)
  // 4. Desktop Hover (che riapplica lo stile bottone)
  return (
    <a
      href={href}
      className={`mt-4 text-lg no-underline transition-all duration-150 ease-out ${buttonStyle} ${linkStyle} md:hover:scale-110 md:hover:${buttonStyle.replace(/ /g, " md:hover:")} ${className}`}
    >
      {label}
    </a>
  );
}

export default NavButton;
