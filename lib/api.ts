import { externalClient } from '@/sanity/lib/client';
import { NextApiRequest, NextApiResponse } from "next";
import { Category, Post, Author } from '@/types/blog'

export async function fetchColabPosts(): Promise<Post[]> {
  const query = `
  *[_type == "post" && "Colab" in categories[]->title] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      mainImage{asset->{url}},
      description,
      "author": author->name,
      "latestCategory": categories[-1]->title,
      publishedAt
    }
  `;
  const posts = await externalClient.fetch(query);
  console.log("Fetched Colab posts:", posts); // Log the posts to debug
  return posts;
}


// Fetch a single post by slug
export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "author": author->name,
    "latestCategory": categories[-1]->title,
    publishedAt,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,  // Fetching the image URL
    body  // Fetch the body content
  }`;

  const post = await externalClient.fetch(query, { slug });
  return post;
};