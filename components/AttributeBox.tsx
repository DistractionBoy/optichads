import React from "react";
import { Attribute } from "../lib";

export interface AttributeBoxProps {
  attribute: Attribute;
  collection: string;
}

export default function AttributeBox({ attribute }: AttributeBoxProps) {
  return (
    <div className="px-2 py-3 sm:p-4 first:border-t-gray-200">
      <dt className="text-base font-normal text-gray-900">
        {attribute.trait_type.toString()}
      </dt>
      <dd className="mt-1 flex justify-between items-baseline">
        <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
          {attribute.value.toString()}
        </div>
      </dd>
    </div>
  );
}
