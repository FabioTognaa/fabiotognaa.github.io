import LinkedinItem from "../../assets/linkedin-icon.svg";
import GithubItem from "../../assets/github-icon.svg";
import InstagramItem from "../../assets/instagram-icon.svg";
import SocialIcon from "../ui/SocialIcon";
function ContactSection() {
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
    <footer className="h-full bg-transparent py-8 mt-50" id="contatti">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex  items-center justify-between border-b border-blue-300 md:pb-8">
          <span className="mb-4 text-2xl font-semibold md:mb-0 md:text-3xl">
            Fabio Tognarelli
          </span>
          <div className="m-0 flex gap-4 p-0">
            {AsideItems.map((item) => (
              <SocialIcon key={item.alt} item={item} />
            ))}
          </div>
        </div>

        <div className="flex justify-around gap-8 pt-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Navigazione</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="transition duration-300 hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition duration-300 hover:text-blue-500"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="transition duration-300 hover:text-blue-500"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contatti</h3>
            <p>Email: fabiotognaa@gmail.com</p>
            <p>Telefono: +39 366 838 1469</p>
          </div>
        </div>

        <div class="mt-8 border-t border-blue-300 pt-8 text-center text-sm">
          &copy; 2025 FabioTognaa.
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;
