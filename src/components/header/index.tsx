import { usePathname } from "next/navigation";

import NavLink from "../navlink";

const Header = () => {
  return (
    <header>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/categories">Categories</NavLink>
      <NavLink href="/test">Test</NavLink>
      <NavLink href="/products">Products</NavLink>
    </header>
  );
};

export default Header;
