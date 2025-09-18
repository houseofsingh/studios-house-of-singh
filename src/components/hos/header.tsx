"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";

import { useRef, useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

const mock = {
  menu: [
    {
      // Singular Page
      title: "Home",
      href: "/",
    },
    {
      // Collection Page - List | Item
      title: "Work",
      href: "/work",
      cms: true,
      done: true,
    },
    {
      // Collection Page - List | Item
      title: "Case Studies",
      href: "/case-studies",
      cms: true,
      done: false,
    },

    // Company Pages
    {
      // Singular Page
      title: "About",
      href: "/about",
    },
    {
      // Singular Page
      title: "Contact",
      href: "/contact",
    },
    {
      // Singular Page
      title: "Contact | Project",
      href: "/contact/project",
    },
    {
      // Singular Page
      title: "FAQ",
      href: "/faq",
    },
    {
      // Collection Page - List
      title: "Testimonials",
      href: "/testimonials",
      cms: true,
      done: true,
    },
    {
      // Collection Page - List | Item
      title: "Services",
      href: "/services",
      cms: true,
      done: true,
    },
    {
      // Collection Page - List | Item
      title: "Careers",
      href: "/careers",
      cms: true,
      done: true,
    },
    {
      // Collection Page - List | Item
      title: "Blog",
      href: "/blog",
      cms: true,
      done: true,
    },
    {
      // Collection Page - List | Item
      title: "Team",
      href: "/team",
      cms: true,
      done: true,
    },

    // Utility Pages
    {
      // Singular Page
      title: "Privacy Policy",
      href: "/policies/privacy",
    },
    {
      // Singular Page
      title: "Terms",
      href: "/policies/terms",
    },
  ].map((each) => ({ ...each, id: each.title })),
};
// const mock = {
//   menu: [
//     {
//       id: "about",
//       href: "/about",
//       title: "About",
//     },
//     // {
//     //   id: "contact",
//     //   href: "/contact",
//     //   title: "Contact",
//     // },
//     // {
//     //   id: "faq",
//     //   href: "/faq",
//     //   title: "FAQ",
//     // },
//     // {
//     //   id: "careers",
//     //   href: "/careers",
//     //   title: "Careers",
//     // },
//     // {
//     //   id: "blog",
//     //   href: "/blog",
//     //   title: "Blog",
//     // },
//     {
//       id: "services",
//       href: "/services",
//       title: "Services",
//     },
//     {
//       id: "work",
//       href: "/work",
//       title: "Work",
//     },
//     {
//       id: "case-studies",
//       href: "/case-studies",
//       title: "Case Studies",
//     },
//     {
//       id: "team",
//       href: "/team",
//       title: "Team",
//     },
//   ],
// };

export default function Header() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const menuContainer = useRef(null);

  const navigation = (
    <nav role="navigation">
      <div
        className={cn(
          "flex flex-col items-start lg:flex-row lg:items-center flex-wrap py-6 lg:p-0 gap-3",
          "gap-1"
        )}
      >
        {/* <div className="flex flex-col items-start lg:flex-row lg:items-center py-6 lg:p-0 gap-3"> */}
        {mock.menu.map((menuItem) => (
          <Link
            key={menuItem.id}
            href={menuItem.href}
            className={cn(
              "flex items-center justify-start text-xl lg:text-base lg:py-2 lg:px-4",
              "p-0!",
              menuItem.cms ? "underline underline-offset-4" : "",
              menuItem.done ? "bg-green-500!" : ""
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
      <div
        className={cn(
          "absolute inset-0 bg-white lg:bg-white/60 lg:backdrop-blur-xl"
        )}
      />
    </div>
  );
}
