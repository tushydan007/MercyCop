import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileLinks from "./MobileLinks";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <RxHamburgerMenu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center">
          <SheetHeader>
            <SheetTitle>TENDER</SheetTitle>
          </SheetHeader>
          <MobileLinks />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
