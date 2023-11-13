import React from 'react'
import "./Comment.css"
import commentImg from "../../img/comment.png"

export default function Comment() {
  return (
    <div className='Comment'>
        <img className="img-comment" src={commentImg}/>
        <div className="content-comment">
            <p className='opinion'>"Such good attention to detail. From the garnish to the handwritten notes, to the cute little bottles! The cocktails tasted amazing too, loved them!"</p>
            <div className="note-comment">
                <p className='stars'>⭐⭐⭐⭐⭐</p>
                <p className='author-comment'>Jo Bright - Google Reviews</p>
            </div>
        </div>
    </div>
  )
}
