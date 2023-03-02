import styles from "./page.module.css";

export default function Post({ params }: { params: { postId: string } }) {
  const { postId } = params;
  return <div>This is post {postId}</div>;
}
