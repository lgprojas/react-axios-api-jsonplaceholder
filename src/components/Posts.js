import React from 'react'

export const Posts = ({ posts, loading }) => {
    if(loading){
        return <h3>Loading...</h3>
    }
  return (
    <>
    <div className='h2'>Lista de posts:</div>
    <ul className='list-group col-6'>
    {posts?.map((post) => (
        <li key={post.id} className='list-group-item'>{post.title}</li>
    ))}
    </ul>
    </>
  )
}
