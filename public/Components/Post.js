import styles from "@/styles/Home.module.css";
// import Image from "next/image";

export default function Post({ project }) {
  console.log(project);
  return (
    <div className={styles.postContainer}>
      {/* <Image
        height={200}
        width={200}
        className={styles.banner}
        src="/"
        alt="bla"
      /> */}
      <h1>{project.title}</h1>
    </div>
  );
}
