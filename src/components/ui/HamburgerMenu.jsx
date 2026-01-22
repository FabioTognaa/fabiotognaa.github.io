import { useState, Fragment } from "react";
//*Componenti della libreria headlessui
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";

//*Icone di Heroicons importate
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

//*COMPONENTE PER HAMBURGER MENU FIGO
function HamburgerMenu({ items }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex">
      {/* 1. BOTTONE HAMBURGER (Visibile quando il menu è chiuso) */}
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#0a2342] transition-all duration-200 hover:scale-110 hover:px-[18px] hover:py-[5px] md:hidden"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Apri menu</span>
        <Bars3Icon className="h-9 w-auto" aria-hidden="true" />
      </button>

      {/* 2. IL MENU LATERALE (DIALOG) */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={setMobileMenuOpen} // Gestisce il click outside e ESC
        >
          {/* Overlay Sfondo Scuro (Backdrop) */}
          <TransitionChild
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
          </TransitionChild>

          {/* Il pannello scorrevole vero e proprio */}
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300 sm:duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300 sm:duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-xs sm:max-w-sm">
                    <div className="flex h-full flex-col overflow-y-scroll bg-blue-50 py-6 shadow-xl">
                      {/* Header del Menu (con tasto Chiudi) */}
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <h2 className="text-xl leading-6 font-semibold text-gray-900">
                            Menu
                          </h2>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="bg-transparents relative rounded-md text-gray-900 hover:text-gray-500"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Chiudi menu</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Lista dei Link */}
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="flex flex-col space-y-4">
                          {items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="block rounded-lg px-3 py-2.5 text-base leading-7 font-semibold text-gray-900 transition hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)} // Chiude il menu quando clicchi un link
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
export default HamburgerMenu;
