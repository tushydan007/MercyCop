import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const SearchFields = () => {
  return (
    <div className="lg:flex gap-10 hidden ">
      <div className="flex gap-3">
        <Button>
          <Link href="/sign-up">Register</Link>
        </Button>
        <Button>
          <Link href="/sign-in">Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default SearchFields;
