import React,{ useContext } from 'react'
import { DataContext } from '../Context'

function Posts() {
    const context = useContext(DataContext)
    const [posts] = context.postApi.posts

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Posts</h3>
            </div>
        </div>
        <div className="row">
            {
                posts && posts.map((item,index) => {
                    return(
                        <div className="col-md-4 mt-2 mb-2" key={index}>
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-warning text-center"> { item.id }.
                                    <span className="text-success text-center">{ item.title }</span></h4>
                                </div>
                                <div className="card-body">
                                    <p className="text-secondary">
                                        {item.body}
                                    </p>
                                </div>
                                    
                                        {/* <li className="list-group-item">
                                            <strong>Id</strong>
                                            <span className='text-success float-end'> { item.id}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Title</strong>
                                            <span className='text-success float-end'> { item.title}</span>
                                        </li> */}
                                        {/* <li className="list-group-item">
                                            <strong>Body</strong>
                                            <span className='text-success float-end'> { item.body}</span>
                                        </li> */}
                                       
                            </div>
                        </div>
                    )
                })
            }
            </div>    
    </div>
  )
}

export default Posts
