export interface SpaceObject {
  id: string;
  name: string;
  slug: string;
  description: string;
  brandColor: string;
  countryId: string;
  accountId: string;
}

export interface CreateSpaceInput {
  name: string;
  description: string;
  brandColor: string;
  countryId: string;
}

export interface UpdateSpaceInput {
  name?: string;
  description?: string;
  brandColor?: string;
}
