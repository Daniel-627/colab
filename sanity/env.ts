export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-10';

// Local Sanity configuration
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

// External Sanity configuration
export const externalDataset = assertValue(
  process.env.NEXT_PUBLIC_EXTERNAL_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_EXTERNAL_SANITY_DATASET'
);

export const externalProjectId = assertValue(
  process.env.NEXT_PUBLIC_EXTERNAL_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_EXTERNAL_SANITY_PROJECT_ID'
);

// Assertion helper function
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}
