export interface CategoryObject {
  id: string;
  name: string;
  normalizedName: string;
  slug: string;
  spaceId?: string;
  createdAt?: string;
}

export interface CreateCategoryInput {
  name: string;
}

export interface UpdateCategoryInput extends CreateCategoryInput {}

export interface UpdateCategoryFormProps {
  spaceId: string;
  categoryId: string;
  input: UpdateCategoryInput;
  onSubmit: (category: CategoryObject) => void;
}