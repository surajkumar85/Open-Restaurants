import styles from "./page.module.css";

export async function generateStaticParams() {
  const data = await fetch("https://dummyjson.com/posts", {
    method: "GET",
  });
  const posts = await data.json();

  const idArr = posts.posts.map((post: any) => ({
    postId: post.id.toString(),
  }));
  return idArr;
}

async function getPost(postId: string) {
  const data = await fetch(`https://dummyjson.com/posts/${postId}`, {
    method: "GET",
  });
  if (!data.ok) throw new Error(`The requested article does not exists`);
  const post = await data.json();
  return post;
}

export default async function Post({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const post = await getPost(postId);
  return (
    <div>
      <p>User Id : {post.id}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
