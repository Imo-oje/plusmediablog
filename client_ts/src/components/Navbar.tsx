import { MenuIcon, Search } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <>
      <header className="w-full px-[24px] mx-auto relative">
        <div className="flex min-h-[88px] justify-between items-center">
          <div className="p-1 cursor-pointer md:hidden">
            <span>
              <Sheet>
                <SheetTrigger>
                  <MenuIcon />
                </SheetTrigger>
                <SheetContent side="left" className="w-3/5 sm:w-[540px]">
                  <SheetHeader className="flex items-start">
                    <SheetTitle>
                      <div className="font-bold uppercase text-[22px] leading-7 p-1 cursor-pointer">
                        Plusmedia
                      </div>
                    </SheetTitle>
                    <SheetDescription>none</SheetDescription>
                  </SheetHeader>
                  <div>df;vk</div>
                </SheetContent>
              </Sheet>
            </span>
          </div>
          <div className="font-bold uppercase text-[22px] leading-7 p-1 cursor-pointer">
            Plusmedia
          </div>
          <div className="hidden md:flex">
            {/* TODO: Add large screen navbar here */}
          </div>
          <div className="cursor-pointer p-1">
            <span>
              <Search />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
