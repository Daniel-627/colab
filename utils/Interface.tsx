export interface Project {
  _id: string;
  title: string;
  description: string;
  slug: { current: string };
  mainImage: string;
  link: string;
  categories: { title: string }[]; // Existing property
  body?: any[];
  projectUrl?: string; // Added projectUrl property
  projectNumber: string;
}

export interface Posters {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: string;
}


export interface ProjectsProps {
  projects: Project[];
}

export interface ProjectPageProps {
  params: {
    slug: string;
  };
}