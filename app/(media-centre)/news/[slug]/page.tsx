// app/blog/[slug]/page.tsx

import React from 'react';
import qs from 'qs';
import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';

// Function to fetch a single blog post by slug
async function fetchPost(slug: string) {
  const query = qs.stringify({
    filters: { slug: { $eq: slug } },
    populate: '*', // Ensure rich text or relations are included
  });

  const res = await fetch(`http://localhost:1337/api/blogs?${query}`);
  const postData = await res.json();

  if (!postData || postData.data.length === 0) {
    throw new Error('Blog not found');
  }

  // Extract the blog data and attributes
  return postData.data[0].attributes;
}

// Page component to render the blog post
const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchPost(params.slug);

  // Ensure content is of type BlocksContent
  const content: BlocksContent = blog.description || [];
  console.log(content)

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-semibold">{blog.title}</h1>
      <p className="text-sm text-gray-500">
        Published on {new Date(blog.publishedAt).toLocaleDateString()}
      </p>

      {/* Render the rich text content using BlocksRenderer */}
      <BlocksRenderer content={content} />
    </div>
  );
};

export default BlogPage;
