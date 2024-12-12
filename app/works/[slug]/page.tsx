// app/projects/[slug]/page.tsx
import React from 'react';
import { Project, ProjectPageProps } from '@/utils/Interface'; // Adjust the path as necessary
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

// PortableText components customization
const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Project Image'}
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }) => {
      const href = value.href || '#';
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
          {children}
        </a>
      );
    },
  },
};

async function getProject(slug: string) {
  const query = 
  `
    *[_type == 'project' && slug.current == $slug][0] {
      title,
      description,
      mainImage,
      body,
      projectUrl
    }
  `;
  const project: Project | null = await client.fetch(query, { slug });

  return project;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-4xl font-bold text-gray-400 pt-9 md:pt-12">{project.title}</h1>
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline text-lg"
          >
            Visit Website
          </a>
        )}
      </div>
      {project.mainImage && (
        <img
          src={urlFor(project.mainImage).url()}
          alt={project.title}
          className="w-full h-auto mb-4 rounded-lg shadow-lg"
        />
      )}
      <div className="prose prose-lg text-gray-500 max-w-none">
        {project.body ? (
          <PortableText value={project.body} components={portableTextComponents} />
        ) : (
          <p>No additional content available.</p>
        )}
      </div>
    </div>
  );
}

// Exporting revalidation option
export const revalidate = 60; // Revalidate the page every 60 seconds
