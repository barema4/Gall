import React from 'react'

function Rating({value, text, color}) {
    return (
        <div className="rating">
            <span>
                <i style={{ color }} className={
                    value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'fas fa-star'

                }></i>

            </span>
            <span>
                <i style={{ color }} className={
                    value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'fas fa-star'

                }></i>

            </span>
            <span>
                <i style={{ color }} className={
                    value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'fas fa-star'

                }></i>

            </span>
            <span>{text && text}</span>
            
        </div>
    )
}

export default Rating
