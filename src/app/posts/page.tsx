import Link from "next/link";
import styles from "./page.module.css";

async function getAllPost() {
  const data = await fetch(`https://dummyjson.com/posts?limit=150`, {
    method: "GET",
  });
  const posts = await data.json();
  return posts;
}

export default async function Post() {
  const posts = await getAllPost();

  return (
    <div className={styles.main}>
      <h1>All Post titles are below</h1>
      {posts.posts.map((item: { id: string; title: string }) => (
        <Link key={item.id} href={`/posts/${item.id}`}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
