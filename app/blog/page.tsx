import Link from "next/link";

export default async function Page() {
  const a = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  return (
    <div>
      <h1>Blog {a.status}</h1>
      <Link href="/blog/1">Read Blog</Link>
      <p>This is a dummy page.</p>
    </div>
  );
}
