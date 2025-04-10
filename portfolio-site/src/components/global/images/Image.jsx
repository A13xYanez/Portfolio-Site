import React from 'react';
import { IKImage } from 'imagekitio-react';
const imageUrlEndpoint = import.meta.env.VITE_IMAGE_URL_ENDPOINT;

const Image = (props) => {
    return (
        <IKImage
            urlEndpoint={imageUrlEndpoint}
            {...props}
        />
    );
};

export default Image;