import { useRouter } from "next/router";

export default function Menu() {
  const router = useRouter();
  const { resname } = router.query;
  return <div>Menu of {resname}</div>;
}
