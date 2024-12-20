import { createClient } from '@sanity/client';


import {
  apiVersion,
  dataset,
  projectId,
  externalDataset,
  externalProjectId,
} from '@/sanity/env';

// Internal Sanity Client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Enable CDN for faster response if data doesn't change often
});

// External Sanity Client

export const externalClient = createClient({
  projectId: externalProjectId,
  dataset: externalDataset,
  apiVersion,
  useCdn: true,
});
