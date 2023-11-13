import React from 'react'
import './BoxCreator.css'
import buildBox from '../../img/buildBox.png'
import {Link} from "react-router-dom"

function BoxCreator() {
  return (
    <div className='BoxCreator'>
        <div className="content-bc">
            <img className="img-bc" src={buildBox}/>
            <div className="creator-bc">
                <h3 className='title-bc'>Mix & match</h3>
                <p className='desc-bc'>Create your own box of six single-serve cocktails, selected from our range of twelve drinks. That’s 12,376 different possible boxes!</p>
                <Link to="/products/build-a-box">
                    <button className='btn-bc'>Build your box</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BoxCreator