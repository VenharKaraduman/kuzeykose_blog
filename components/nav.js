import Link from "next/link";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "blog", label: "Blog" },
  { href: "https://www.youtube.com/kuzeykose", label: "YouTube" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav className="flex justify-center mt-6">
    <ul className="font-sans flex-row flex">
      {links.map(({ key, href, label }) => (
        <li className="px-2" key={key}>
          {label === "YouTube" ? (
            <a href={href} target="_blank">
              <button className="p-1 bg-red-50 hover:bg-red-100">
                {label}
              </button>
            </a>
          ) : (
            <Link href={href}>
              <button className="p-1 bg-green-50 hover:bg-green-100">
                {label}
              </button>
            </Link>
          )}
        </li>
      ))}
    </ul>

  </nav>
);

export default Nav;
