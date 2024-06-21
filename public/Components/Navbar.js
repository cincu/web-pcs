import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon } from "@chakra-ui/icons";
export default function Navbar() {
  const router = useRouter();
  function isActive(path) {
    return router.pathname.startsWith(path) ? styles.active : "";
  }
  function isHome(path) {
    return router.pathname === "/";
  }
  return (
    <div className={styles.grid}>
      {!isHome() && (
        <Link className={styles.button} href="/">
          <ChevronLeftIcon />
        </Link>
      )}
      <Link className={`${styles.card} ${isActive("/about")}`} href="/about">
        <h2>
          About <span>-&gt;</span>
        </h2>
      </Link>
      <Link
        className={`${styles.card} ${isActive("/projects")}`}
        href="/projects"
      >
        <h2>
          Projects <span>-&gt;</span>
        </h2>
      </Link>
      <Link
        className={`${styles.card} ${isActive("/contact")}`}
        href="/contact"
      >
        <h2>
          Contact <span>-&gt;</span>
        </h2>
      </Link>
    </div>
  );
}
