"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLinks.module.css";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  const isActive = pathName === item.path;

  return (
    <Link href={item.path} className={`${styles.container} ${isActive ? styles.actives : ''}`}>
      {item.title}
    </Link>
  );
};

export default NavLink;
