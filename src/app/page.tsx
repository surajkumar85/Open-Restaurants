import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to the next app</h1>
      <h2>We gonna fetch data from external API and generate statice pages</h2>
      <Link href="/posts">Go to post pages</Link>
    </main>
  );
}
