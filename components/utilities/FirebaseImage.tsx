import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { getFile } from '../../lib/firebase'

const FirebaseImage = ({
    className = '',
    image = '',
    width = '',
    height = '',
}) => {
    const [icon, setIcon] = useState(image)
    const layout = width == '' && height == ''

    useEffect(() => {
        getFile(image)
            .then((file) => {
                setIcon(file)
            })
            .catch((error) => {
                console.log(error)
            })
    })

    return (
        <div className={className}>
            {!layout && (
                <Image src={icon} alt={image} width={width} height={height} />
            )}
            {layout && <Image src={icon} alt={image} layout="fill" />}
        </div>
    )
}

export default FirebaseImage
