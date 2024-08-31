import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);

  if (!post || !post.id || !post.title || !post.content || !post.date) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>Post</h1>
      <Post id={post.id} title={post.title} content={post.content} date={post.date} />
    </>
  );
}

