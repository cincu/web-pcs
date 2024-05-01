import styles from "@/styles/Home.module.css";
export default function Footer({ cincu }) {
  return (
    <div className={styles.footer}>
      <p>
        {cincu.name}, {cincu.year}
      </p>
    </div>
  );
}
