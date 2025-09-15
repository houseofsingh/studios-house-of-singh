"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useRef, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

const mock = {
  menu: [
    {
      id: "about",
      href: "/about",
      title: "About",
    },
    // {
    //   id: "contact",
    //   href: "/contact",
    //   title: "Contact",
    // },
    // {
    //   id: "faq",
    //   href: "/faq",
    //   title: "FAQ",
    // },
    // {
    //   id: "careers",
    //   href: "/careers",
    //   title: "Careers",
    // },
    // {
    //   id: "blog",
    //   href: "/blog",
    //   title: "Blog",
    // },
    {
      id: "services",
      href: "/services",
      title: "Services",
    },
    {
      id: "work",
      href: "/work",
      title: "Work",
    },
    {
      id: "case-studies",
      href: "/case-studies",
      title: "Case Studies",
    },
    {
      id: "team",
      href: "/team",
      title: "Team",
    },
  ],
};

export default function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const menuContainer = useRef(null);

  const navigation = (
    <nav role="navigation">
      <div className="flex flex-col items-start lg:flex-row lg:items-center py-6 lg:p-0 gap-3">
        {mock.menu.map((menuItem) => (
          <Link
            key={menuItem.id}
            href={menuItem.href}
            className={cn(
              "flex items-center justify-start text-xl lg:text-base lg:py-2 lg:px-4"
            )}
          >
            {menuItem.title}
          </Link>
        ))}
      </div>
    </nav>
  );

  return (
    <div
      data-animation="over-left"
      data-collapse="medium"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className={cn(
        "h-[70] sticky top-0 z-10 flex justify-center items-center",
        "bg-transparent"
      )}
    >
      <div className={cn("container---main navbar-container")}>
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo/hos-studios.svg"
              alt="House of Singh Studios"
              width={70}
              height={70}
            />
          </Link>
          <div className="flex gap-3">
            <div className="hidden lg:block">{navigation}</div>
            <div
              ref={menuContainer}
              className={cn(
                "block lg:hidden",
                "*:data-[slot=drawer-overlay]:top-[70]",
                "*:data-[slot=drawer-content]:top-[70]! *:data-[slot=drawer-content]:max-w-full! *:data-[slot=drawer-content]:w-full! *:data-[slot=drawer-content]:border-none!"
              )}
            >
              <Drawer
                onOpenChange={setSheetOpen}
                direction="left"
                modal={false}
                container={menuContainer.current}
              >
                <DrawerTrigger>
                  <div>{sheetOpen ? <XIcon /> : <MenuIcon />}</div>
                </DrawerTrigger>
                <DrawerContent>
                  <DialogHeader className="sr-only">
                    <DialogTitle>House of Singh Studios Menu</DialogTitle>
                    <DialogDescription>
                      House of Singh Studio Navigation Menu
                    </DialogDescription>
                  </DialogHeader>
                  <div className="container---main navbar-container">
                    {navigation}
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
      <div className={cn("absolute inset-0 bg-white lg:bg-white/60 lg:backdrop-blur-xl")} />
    </div>
  );
}
