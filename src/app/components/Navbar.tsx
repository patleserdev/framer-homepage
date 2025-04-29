"use client";
import { usePathname } from "next/navigation";

interface InterfaceNavbar {
  textColor: string;
}

const routes = [
  {
    title: "A propos",
    link: "/#a-propos",
    order:4
  },
  {
    title: "Services",
    link: "/#services",
    order:3
  },
  {
    title: "Contact",
    link: "/#contact",
    order:5
  },
  {
    title: "Home",
    link: "/",
    order:1
  },
  {
    title: "Page 2",
    link: "/page2",
    order:2
  },
];

export default function Navbar({ textColor }: InterfaceNavbar) {
  const pathName = usePathname();

  return (
    <nav className="">
      <ul className=" flex flex-row md:w-[100%]  md:items-end md:justify-end p-3 ">
        {routes
        .sort((a, b) => a.order - b.order)
        .map((route,i) => {
            
          return (
            pathName != route.link ?
            <li key={i}>
              <a
                className="text-lg font-bold w-50 text-center hover:bg-slate-800 transition-all p-2 rounded"
                href={route.link}
                style={{ color: textColor }}
              >
                {route.title}
              </a>
            </li>
            : null
          )
        })}
      </ul>
    </nav>
  );
}
