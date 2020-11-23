import React, {useState} from 'react';
import Image from './Image'


const ImageContainer = (props) => {
    const [currentUserId, setcurrentUserId] = useState(localStorage.getItem('id'))
    // If we are on home page display up to 8 img 
    // If on profile page half the size and 2 comontents  
    console.log(props.imgClass)
    const images = props.images.map((image, index) => (
        <Image key={index} imgUrl={image.imageUrl} imgClass={props.imgClass}/>
    ))

    return (
        <div className={props.divClass}>
            {images}1
        </div>
    );
}

export default ImageContainer;
