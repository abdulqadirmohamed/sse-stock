import React from 'react'
import qs from "qs"

async function fetchPosts(slug:string) {
  const ourQuery = qs.stringify({
    filters: {
      slug: slug
    },
   
  })


  const postsPromise = await fetch(`http://localhost:1337/api/blogs?${ourQuery}`)
  const post = await postsPromise.json()
  return post.data[0]
}

const page = async({params}:{params: {slug:string}}) => {
  const post = await fetchPosts(params.slug)

  return (
    <div>
      {post.title}
    
      <p>{post.createdBy}</p>
      </div>
  )
}

export default page