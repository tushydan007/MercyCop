import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import MobileLinks from "./MobileLinks";
import MobileNav from "./MobileNav";
import SearchFields from "./SearchFields";

const Navbar = () => {
  return (
    <header className="w-full border-b lg:px-5">
      <nav className="max-w-[1495px] p-5 w-full mx-auto bg-transparent md:px-10 xl:px-0 flex justify-between items-center">
        <Link href="/" className="font-bold">
          TENDER
        </Link>
        <div>
          <MobileLinks />
        </div>
        <div>
          <SearchFields />
        </div>
        <MobileNav />
      </nav>
    </header>
  );
};

export default Navbar;
