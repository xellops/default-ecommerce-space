export interface BannerObject {
  id: string;
  name: string;
  slug: string;
  spaceId?: string;
  imageKey: string;
  targetResourceType?: string;
  targetResourceRef?: string;
  tags: string;
  createdAt: Date;
  updatedAt: Date;
}
