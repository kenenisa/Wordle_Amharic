import React, { useEffect, useState } from 'react'
import './Hints.css';
//
function Hints({rowCount}) {
    const [hintList, setHintList] = useState([])
    useEffect(() => {
        fetch(process.env.REACT_APP_REMOTE_HOST + '/random?limit=' + (25 / (rowCount + 1)))
            .then(e => e.json())
            .then(e => {
                if(e) setHintList(e)
            })
    }, [rowCount])
    return (
        <div className="hints">
            <details>
                <summary>Random Hints</summary>
                <ol>
                    {hintList.map((val,key)=><li key={key}>{val.word}</li>)}
                </ol>
            </details>
        </div>
    )
}

export default Hints