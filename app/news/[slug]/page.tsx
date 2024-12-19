// app/trial/[slug]/page.tsx
import SocialMediaSideBar from "@/components/SocialMediaSideBar";
import { fetchPostBySlug } from "@/lib/api";
import { Post } from "@/types/blog";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

interface pageProps {
  params: {
    slug: string;
  };
}

export default async function page({ params }: pageProps) {
  const { slug } = params;

  // Fetch the post using the slug
  const post: Post | null = await fetchPostBySlug(slug);

  // If no post is found, return 404
  if (!post) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-4">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      {/* Published Date */}
      <p className="text-gray-600">Published on: {new Date(post.publishedAt).toDateString()}</p>
      
      {/* Main Image */}
      {post.mainImage && (
        <img
          src={post.mainImage}
          alt={post.title}
          className="my-4 w-full max-w-3xl object-cover rounded-lg"
        />
      )}

      {/* Body Content */}
      <div className="flex flex-row">
        <div>
          <SocialMediaSideBar />
        </div>
        <div className="mt-6 prose max-w-none">
          <PortableText value={post.body} />
        </div>
      </div>
    </div>
  );
}

// ISR: Revalidate page every 60 seconds
export const revalidate = 60;
