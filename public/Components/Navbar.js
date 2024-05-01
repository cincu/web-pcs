import styles from "@/styles/Home.module.css";

export default function Navbar() {
  return (
    <div className={styles.grid}>
      <a href="./about" className={styles.card}>
        <h2>
          About <span>-&gt;</span>
        </h2>
      </a>

      <a
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Projects <span>-&gt;</span>
        </h2>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>
          Contact <span>-&gt;</span>
        </h2>
      </a>
    </div>
  );
}
