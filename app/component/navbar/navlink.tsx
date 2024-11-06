import React from "react";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { NavLinkProps } from "@/Interfaces/INavbar";
import Link from "next/link";

function NavLink({ title, showArrow = false, url = "/" }: NavLinkProps) {
  return (
    <Link
      href={url}
      className="flex items-center gap-4 hover:border-b-secondaryBlue border-b-[1px] hover:text-secondaryBlue border-transparent cursor-pointer"
    >
      {title}
      <span>{showArrow && <ArrowRightOutlinedIcon />}</span>{" "}
    </Link>
  );
}

export default NavLink;
