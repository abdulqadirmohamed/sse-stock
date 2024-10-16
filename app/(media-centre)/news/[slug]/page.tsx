// app/blog/[slug]/page.tsx

import React from 'react';
import qs from 'qs';
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

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
  try {
    const blog = await fetchPost(params.slug);

    return (
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500">
          Published on {new Date(blog.publishedAt).toLocaleDateString()}
        </p>
        {/* <div
          className="prose mt-4"
          dangerouslySetInnerHTML={{ __html: blog.description || 'No content available.' }}
        ></div> */}
         <div className="prose mt-4">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {blog.description || 'No content available.'}
          </ReactMarkdown>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div className="text-center mt-8">Blog not found</div>;
  }
};

export default BlogPage;
