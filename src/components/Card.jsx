import React from "react";
const Card = ({ src, alt, animate }) => {
    return (
        <>

            <img className={animate} src={src} alt={alt} height={100} width={100} />

        </>
    )
};

export default Card;