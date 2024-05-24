import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const MobileLinks = () => {
  return (
    <div className="flex-col lg:flex-row gap-20 hidden lg:flex">
      {navLinks.map((link) => (
        <Link href={link.path} className="font-medium">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileLinks;
