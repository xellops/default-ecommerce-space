import {
  ProductSpecificationsProps,
  ProductSpecificationObject,
  ProductSpecificationInput,
  ProductSpecificationInputWithMeta,
  SpecificationObject,
} from "@/interfaces";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { marketplacesApi } from "@/utils";
import { useRouter } from "next/navigation";

export const ProductSpecifications = (props: ProductSpecificationsProps) => {
  const router = useRouter();
  const [updating, setUpdating] = useState<boolean>(false);
  const [
    productSpecificationInputWithMeta,
    setProductSpecificationInputWithMeta,
  ] = useState<ProductSpecificationInputWithMeta[]>([]);

  useEffect(() => {
    const { group } = props;
    if (!group) return;

    // 1. Make a map of all product specifications
    const prodSpecMap: {
      [specificationId: string]: ProductSpecificationObject;
    } = {};

    props.specifications.forEach((prodSpec) => {
      prodSpecMap[prodSpec.specificationId] = prodSpec;
    });

    // 2. Aggregate Specifications From Spec Group
    let specifications: SpecificationObject[] = props.group.specifications;

    // 2.5 Add more if there is a parent;
    if (props.group.parent) {
      specifications = [...props.group.specifications, ...specifications];
    }

    // 3. define prod specification inputs containing the metadata field.
    const inputsWithMetadata: ProductSpecificationInputWithMeta[] = [];

    specifications.forEach((spec) => {
      const prodSpec = prodSpecMap[spec.id];

      inputsWithMetadata.push({
        id: prodSpec?.id,
        specificationId: spec.id,
        value: prodSpec?.value || { raw: null },
        metadata: spec,
      });
      setProductSpecificationInputWithMeta(inputsWithMetadata);
    });
  }, [props]);

  return (
    <div className="grid gap-6">
      {props.group ? (
        <div className="grid gap-2">
          <h3 className="font-medium">{props.group.name}</h3>
        </div>
      ) : (
        <p>User has to select a specification group.</p>
      )}
    </div>
  );
};
