import React from 'react'

import Image from 'react-bootstrap/Image'
import Header_image from '../images/header_image.png'

let imgStyle = {
    width: '100%',
    height: 'auto'
}

function HeaderImage() {
    return (
        <div style={imgStyle}> 
            <Image src={Header_image} alt='Header image' fluid style={{width: '100%'}}/>
        </div>
    )
}

export default HeaderImage