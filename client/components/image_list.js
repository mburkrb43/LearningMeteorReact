//Create our image list component

//import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
    { title: 'Pen', link: 'https://dummyimage.com/600x400'},
    { title: 'Paper', link: 'https://dummyimage.com/600x400'},
    { title: 'Mug', link: 'https://dummyimage.com/600x400'}
];

//Create
const ImageList = () => {
//    const RenderedImages = IMAGES.map(function(image) {
//        return <ImageDetail image={image} />
//    });
    const RenderedImages = IMAGES.map((image) => 
     <ImageDetail key={image.title} image={image} />
    );

    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

//Export the component
export default ImageList;