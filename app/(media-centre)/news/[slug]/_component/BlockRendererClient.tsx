"use client";
// import Image from "next/image";

import {
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <div>
      alternativeText
    </div>
    // <BlocksRenderer
    //   content={content}
    //   blocks={{
    //     image: ({ image }) => {
    //       return (
    //         <Image
    //           src={image.url}
    //           width={image.width}
    //           height={image.height}
    //           alt={image.alternativeText || ""}
    //         />
    //       );
    //     },
    //   }}
    // />
  );
}