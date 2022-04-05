import React from 'react'

function Keys({ k, changeKey }) {
    const handleClick = () => {
        changeKey(k)
    }
    return (
        <div className="keys" onClick={handleClick}>{k}</div>
    )
}

export default Keys