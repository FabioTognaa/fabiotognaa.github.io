import LinkedinItem from "../../assets/linkedin-icon.svg";
import GithubItem from "../../assets/github-icon.svg";
import InstagramItem from "../../assets/instagram-icon.svg";
import SocialIcon from "./SocialIcon";

//* BARRA SOCIAL LATERALE SEZIONE HOME
function AsideBar() {
  const AsideItems = [
    {
      href: "https://www.linkedin.com/in/fabio-tognarelli",
      src: LinkedinItem,
      alt: "linkedin icon",
    },
    {
      href: "https://github.com/FabioTognaa",
      src: GithubItem,
      alt: "github icon",
    },
    {
      href: "https://www.instagram.com/fabiotognarellii",
      src: InstagramItem,
      alt: "instagram icon",
    },
  ];

  return (
    <aside className="absolute top-2/5 left-0 hidden flex-col items-center gap-9 rounded-r-2xl bg-transparent p-6 shadow-xl/10 md:flex">
      {AsideItems.map((item) => (
        <SocialIcon key={item.alt} item={item} />
      ))}
    </aside>
  );
}
export default AsideBar;
