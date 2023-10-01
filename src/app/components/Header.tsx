import { useEffect, useState } from "react";
import Link from "next/link";
import links from "./Lib/links";
import clsx from "clsx";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header>
      <div className="mx-auto max-w-screen-xl flex items-center justify-between px-8 py-6 lg:py-8 lg:flex-row">
        <div className="flex items-center space-x-6">
          <h1 className="text-3xl font-extrabold text-primary-500">
            Estares Jericho Y.
          </h1>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={"/" + link.href}
                  className="text-lg font-medium text-gray-600 relative group hover:text-white mb-5"
                >
                  {link.label}
                  <span className="absolute bottom-[-5px] left-0 w-full h-1 rounded-full bg-green-500 origin-left transform scale-x-0 transition-transform group-hover:scale-x-50 duration-300 group-hover:bg-red-500 group-hover:shadow-md"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            className="flex h-10 w-10 items-center justify-center"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6 text-primary-500" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          isOpen ? "visible opacity-100" : "invisible opacity-0",
          "text-dark-300 absolute inset-0 z-10 min-h-screen w-full overflow-hidden bg-white transition-all",
        )}
        aria-expanded={isOpen}
      >
        <div className="container relative h-full bg-black">
          <div className="px-8 flex items-center justify-between py-8">
            <button type="button" onClick={() => setIsOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-primary-500" />
            </button>
          </div>
          <nav
            className="relative z-40 pt-32 text-left "
            aria-label="Mobile menu"
          >
            <ul className="space-y-4 lg:space-y-8">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={"/" + link.href}
                    className="lg:text-8xl inline-block font-serif text-xl font-bold leading-none hover:text-red-600 hover:bg-white transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
