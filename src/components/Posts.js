import React from 'react'

export const Posts = ({ posts, loading }) => {
    if(loading){
        return <h3>Loading...</h3>
    }
  return (
    <>
    <div className='h2'>Lista de posts:</div>
    <ul>
    {posts?.map((post) => (
        <li key={post.id}>{post.title}</li>
    ))}
    </ul>
    </>
  )
}
