"use client";

import Link from "next/link";
import React from "react";
import { IoLogoSlack } from "react-icons/io";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Issues",
      href: "/issues",
    },
  ];
  return (
    <nav className="flex space-x-5 px-5 border-b h-14 items-center mb-5">
      <IoLogoSlack />
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li key={link.href}>
            {
              <Link
                className={classNames({
                  "text-zinc-800": currentPath === link.href,
                  "text-zinc-500": currentPath !== link.href,
                  "hover:text-zinc-800 transition-colors": true,
                })}
                href={link.href}
              >
                {link.label}
              </Link>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
