

import React from 'react';
import qs from 'qs';
import Image from 'next/image';
import { TBlog } from '@/types/types';

// Function to fetch a single blog post by slug
async function fetchPost(slug: string) {
  const query = qs.stringify({
    filters: { slug: { $eq: slug } },
    populate: '*',
  });

  const res = await fetch(`${process.env.API_URL}/api/blogs?${query}`, {
    next: {
      revalidate: 60,
    },
  
  });
  const postData = await res.json();

  if (!postData || postData.data.length === 0) {
    throw new Error('Blog not found');
  }

  return postData.data[0];
}

// Generate static paths for each blog post
export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/api/blogs`);
  const data = await res.json();

  return data.data.map((post: TBlog) => ({
    slug: post.slug,
  }));
}
// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  return {
    title: post.title,
    description: post.summary || post.content[0]?.children[0]?.text || 'Read this blog post.',
    openGraph: {
      title: post.title,
      description: post.summary || 'Check out this amazing blog post!',
      images: [
        {
          url: post.cover?.formats?.large?.url || '/default-cover.jpg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary || 'Check out this amazing blog post!',
      images: [post.cover?.formats?.large?.url || '/default-cover.jpg'],
    },
  };
}

// Page component to render the blog post
const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchPost(params.slug);
  return (
    <div className=''>
      <div className="w-full h-[500px] relative">
        {/* Background Image */}
        <Image
          src={`${blog.cover?.formats?.large?.url}`}
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
      <div className="prose max-w-3xl mx-auto p-4">
         {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
        {blog.content.map((item: any, index: number) => {
          // Check the type of the item
          if (item.type === 'paragraph') {
            return (
              <div key={index} className='my-5'>
               {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                {item.children.map((child: any, childIndex: number) => (
                  <p key={childIndex}>{child.text}</p> // Render paragraph text
                ))}
              </div>
            );
          } else if (item.type === 'list') {
            return (
              <ul key={index} className="list-disc ml-5 my-5">
                 {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                {item.children.map((listItem: any, listIndex: number) => (
                  <li key={listIndex}>
                 {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                    {listItem.children.map((child: any) => child.text).join('')}
                  </li>
                ))}
              </ul>
            ); // Render bullet list
          } else {
            return null; // Handle other types or return null
          }
        })}
      </div>


    </div>
  )
};

export default BlogPage;

