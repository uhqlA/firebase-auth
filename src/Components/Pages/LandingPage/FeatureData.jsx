import React from 'react'

function FeatureData (props) {
  return (
    <div className='a-box'>
        <div className="a-b-img">
            <img src={props.image} alt="" />
        </div>
        <div className="s-b-text">
            <h2> {props.title} </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, tenetur!</p>
        </div>
      
    </div>
  )
}

export default FeatureData;
