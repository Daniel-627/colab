import { externalClient } from '@/sanity/lib/client';
import { NextApiRequest, NextApiResponse } from "next";
import { Category, Post, Author } from '@/types/blog'

export async function fetchColabPosts(): Promise<Post[]> {
  const query = `
  *[_type == "post" && "Colab" in categories[]->title] | order(publishedAt desc) {
      _id,
      title,
      slug,
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
