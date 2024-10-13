import React from 'react'

const getPost = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:1337/api/blogs?filters[slug][$eq]=${slug}&populate=*`, {
      cache: 'no-store'
    })
    if (res.ok) {
      const post = await res.json()
      return post
    }
  } catch (error) {
    console.log(error)
  }
}

const page = async ({ params }: { params: { slug: string } }) =>{
  const { slug } = params;
  const post = await getPost(slug);
  console.log(post)

  // if (!post) {
  //   return <p>Post not found</p>;
  // }
  return (
    <div className='container mx-auto'>
       <h1 className='font-bold text-2xl'>title: {post.title}</h1>
    </div>
  )
}

export default page