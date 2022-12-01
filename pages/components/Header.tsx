import styles from "../../styles/Header.module.css"
import Link from "next/link";

const links = [{link: "/", value: "Home"}, {link: "/about", value: "About"}, {link: "/products", value: "Products"}]

const Header = () => {
  return (
    <ul className={styles.menu}>
        {links.map((l, index) => (
            <li key={index}>
                <Link href={l.link}>
                {l.value}
                </Link>
            </li>
        ))}
    </ul>
  );
};

export default Header;
