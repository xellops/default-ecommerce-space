const baseUrl = process.env.NEXT_PUBLIC_STORAGE_BASE_URL;

export const Storage = {
  get(objectKey: string) {
    return `${baseUrl}/${objectKey}`;
  },
};
