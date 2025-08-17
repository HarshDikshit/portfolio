"use client";

import { Button } from "@/components/ui/button";
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
import { Book, Contact, CrossIcon, MenuIcon } from "lucide-react";
import { useState } from "react";
import { GoBrowser, GoProject } from "react-icons/go";

export const navItems = [
  { name: "About", link: "about", icon: <GoBrowser /> },
  { name: "Projects", link: "projects", icon: <GoProject /> },
  { name: "Academics", link: "academics", icon: <Book /> },
  { name: "Contact", link: "contact", icon: <Contact /> },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    setOpen(false); // close the sheet first
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView();
      }
    }, 1000); // small delay so sheet closes first
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <SheetHeader>
          <SheetTitle className="mx-auto text-center flex">Menu</SheetTitle>
        </SheetHeader>
        <div className="py-20 w-[200px] gap-6 mx-auto flex flex-col">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => handleClick(item.link)}
              className="decoration-0 flex  justify-between px-5 items-center "
            >
              <span className="w-4 h-4 object-cover items-center flex justify-center">
                {item.icon}
              </span>
              {item.name}
            </button>
          ))}
        </div>
        
      </SheetContent>
    </Sheet>
  );
}
