import Link from "next/link";
import "./navbar.scss";

import { House, Newspaper } from "lucide-react";

export default function SideNavbar() {
  return (
    <div className="side-navbar">
      <ul>
        <li className="nav-group">
          <Link href="/">
            <House />
          </Link>{" "}
          <p className="link-text">Home</p>
        </li>
        <li className="nav-group">
          <Link href="/">
            <Newspaper />
          </Link>
          <p className="link-text">News</p>
        </li>
      </ul>
    </div>
  );
}
