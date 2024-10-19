// app/blog/[slug]/page.tsx

import React from 'react';
import qs from 'qs';
import Image from 'next/image';

// Function to fetch a single blog post by slug
async function fetchPost(slug: string) {
  const query = qs.stringify({
    filters: { slug: { $eq: slug } },
    populate: '*',
  });

  const res = await fetch(`http://localhost:1337/api/blogs?${query}`);
  const postData = await res.json();

  if (!postData || postData.data.length === 0) {
    throw new Error('Blog not found');
  }

  return postData.data[0];
}

// Page component to render the blog post
const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchPost(params.slug);
  return (
    <div className=''>
      <div className="w-full h-[500px] relative">
        {/* Background Image */}
        <Image
          src={`http://localhost:1337${blog.cover?.formats?.large?.url}`}
          alt={blog.title}
          className="object-cover object-center"
          fill
          priority
          style={{ objectFit: 'cover' }}
          quality={100}
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-6">
          <h1 className="md:w-1/2 mx-auto text-3xl md:text-5xl font-bold mb-4 text-center">
            {blog.title}
          </h1>
        </div>
      </div>
      <div className="prose max-w-3xl mx-auto p-4"
        dangerouslySetInnerHTML={{ __html: blog.description || 'No content available.' }}
      ></div>
    </div>
  )
};

export default BlogPage;

