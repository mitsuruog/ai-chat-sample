"use client";

import Link from "next/link";
import { MenuItem, Menu as RACMenu } from "react-aria-components";

const menus = [
  { href: "/chat", label: "Chat" },
  { href: "/completion", label: "Completion" },
  { href: "/assistant", label: "Assistant" },
];

const Menu = () => {
  return (
    <RACMenu className="p-4">
      {menus.map((menu) => (
        <MenuItem className="px-4 py-2" key={menu.href}>
          <Link href={menu.href}>{menu.label}</Link>
        </MenuItem>
      ))}
    </RACMenu>
  );
};

export default Menu;
