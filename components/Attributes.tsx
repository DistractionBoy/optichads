import React from "react";
import { Attribute } from "../lib";
import AttributeBox from "./AttributeBox";

export interface AttributesProps {
  attributes: Attribute[];
  collection: string;
}

export default function Attributes({
  attributes,
  collection,
}: AttributesProps) {
  return (
    <dl className="grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      {attributes &&
        attributes.map((attribute, idx) => (
          <AttributeBox
            key={idx}
            attribute={attribute}
            collection={collection}
          />
        ))}
    </dl>
  );
}
