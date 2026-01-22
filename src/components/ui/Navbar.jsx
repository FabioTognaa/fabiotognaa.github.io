import NavItem from "./NavItem.jsx";

//* ELENCO DI LINK SX E DX DEL HEADER
function Navbar({ items, className }) {
  return (
    <div
      className={`text-md flex gap-4 font-semibold md:gap-8 md:text-lg ${className} `}
    >
      {items.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </div>
  );
}
export default Navbar;
