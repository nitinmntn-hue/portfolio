import React from "react";
const Card = ({src, alt, animate}) => {
    return (
        <>
            <div>
                <p>hello</p>
                <div>
                <img className={animate} src={src} alt={alt} height={100} width={100} />
                </div>
            </div>
        </>
    )
};

export default Card;