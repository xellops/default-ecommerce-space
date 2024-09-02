export enum SpecificationGroupVisibility {
  private = "private",
  community = "community",
  marketplace = "marketplace",
}

export enum SpecificationType {
  string = "string",
  number = "number",
}

export interface SpecificationObject {
  id: string;
  name: string;
  type: string | any;
  groupId: string;
  accountId: string;
  allowedValues: any[] | null;
}

export interface SpecificationGroupObject {
  id: string;
  name: string;
  slug: string;
  description: string;
  documentation?: string;
  visibility: SpecificationGroupVisibility;
  parentId?: string;
  accountId: string;
  createdAt: Date;
  updatedAt: Date;
  parent: SpecificationGroupObject | null;
  specifications: SpecificationObject[];
}

export interface CreateSpecificationGroupInput {
  name: string;
  description: string;
  visibility: SpecificationGroupVisibility;
  documentation?: string;
  parentId?: string;
}

export interface UpdateSpecificationGroupInput {
  name?: string;
  description?: string;
  visibility?: SpecificationGroupVisibility;
  documentation?: string;
  parentId?: string;
}

export interface SpecificationGroupFormProps {
  /** A specification group */
  parentId?: string;
  group?: SpecificationGroupObject;
  onSubmit: (group: SpecificationGroupObject) => void;
}

export interface UpdateSpecificationGroupFormProps {
  group: SpecificationGroupObject;
  onSubmit: (group: SpecificationGroupObject) => void;
}

export interface SpecificationsProps {
  editable?: boolean;
  group: SpecificationGroupObject;
}

export interface AddSpecificationInput {
  name: string;
  type: string;
}

export interface UpdateSpecificationInput {
  name: string;
}

export interface SpecificationFormProps {
  groupId: string;
  disabled?: boolean;
  specification?: SpecificationObject;
  onAdd?: (group: SpecificationObject) => void;
  onUpdate?: (group: SpecificationObject) => void;
  onDelete?: () => void;
}

export interface SpecificationGroupTableProps {
  group?: SpecificationGroupObject;
}
