import React from "react";

interface Props {
  content: React.ReactNode;
}

export default function Content({ content }: Props) {
  return <div>{content}</div>;
}
