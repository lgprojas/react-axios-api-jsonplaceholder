import React from 'react'
import Truncate from '../helpers/Truncate'
import Days from '../helpers/Days'

export const Posts = ({ posts, loading }) => {
    if(loading){
        return <h3>Loading...</h3>
    }
  return (
    <>
    <div className='h2'>Lista de posts:</div>
    <div className='row row-cols-2 row-cols-lg-2 g-2'>
    {posts?.map((post) => (
        <div className="card m-1 " style={{maxWidth: "540px"}}>
            <div className="row g-0">
            <div className="col-md-4 mt-4">
                <img src={post.image} className="img-fluid rounded-start img-thumbnail p-2" alt="..." width={"100%"} height={"auto"}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <div className="card-title h6" style={{textAlign: "justify", height: "45px"}}>{post.title}</div>
                <p className="card-text" style={{textAlign: "justify"}}>{Truncate(post.content,100,100)} <a className='btn btn-outline-secondary btn-sm' style={{padding: "0px 2px 0px 2px"}} href=''>Leer más</a></p>
                <p className="card-text"><small className="text-muted">Publicado {Days(post.publishedAt)}</small></p>
                </div>
            </div>
            </div>
        </div>
    ))}
    </div>
    </>
  )
}
