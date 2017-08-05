//Create our image list component

//import React
import React from 'react';

//Create
const ImageDetail = (props) => {
    // props.image is he image obect
    return (
        <li className="media list-group-item">
            <div className="media-left">
               <img src={props.image.link} />
            </div>
        <div className="media-body">
            <h4 className="media-heading">
                {props.image.title}
            </h4>
        </div>
        </li>
    );
};

//Export the component
export default ImageDetail;