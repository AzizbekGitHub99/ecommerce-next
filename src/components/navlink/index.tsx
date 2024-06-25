"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import ChildrenType from "@/types/children";

const NavLink = ({
  children,
  href,
  className = "",
  ...props
}: ChildrenType & { href: string; className?: string }) => {
  const pathname = usePathname();

  return (
    <Link
      className={pathname === href ? `active ${className}` : className}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
