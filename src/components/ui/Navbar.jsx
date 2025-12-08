import NavItem from "./NavItem.jsx";

//* ELENCO DI LINK SX E DX DEL HEADER
function Navbar({ items }) {
  return (
    <div className="flex gap-4 text-sm font-semibold md:gap-8 md:text-lg">
      {items.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </div>
  );
}
export default Navbar;
