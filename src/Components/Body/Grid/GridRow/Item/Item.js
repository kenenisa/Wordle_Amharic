import React, { useEffect, useState } from 'react'
import './Item.css'
function Item({ pos, word, itemType, aD }) {
    const [bounce, setBounce] = useState(false);
    const letter = word[pos]
    useEffect(() => {
        if (letter) {
            setBounce(true)
            setTimeout(() => {
                setBounce(false)
            }, 300)
        }
    }, [letter])
    return (
        <div className={`row_items ${itemType(pos)} ${aD(pos)} ${bounce ? 'bounce' : ''}`}>
            {letter ? letter : ""}
        </div>
    )
}

export default Item