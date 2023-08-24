import React from 'react'

const Slide = (props) => {
    const {img, title, content} = props
  return (<>
    <div className="item"> 
        <img className="d-block w-100" src={img} alt="First slide"/>

            <div className="caption d-md-block">
                <div className="display">{title} </div>
                <div className="content">{content}</div>
                     </div>

        </div>
        </>
  )
}

export default Slide
