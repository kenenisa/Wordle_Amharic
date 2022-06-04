import React, { useEffect, useState } from 'react'
import RandomWords from '../../../Utils/RandomWords';
import './Hints.css';
//
function Hints({ rowCount,col }) {
    const [hintList, setHintList] = useState([])
    useEffect(() => {
        setHintList(RandomWords((25 / (rowCount + 1)),col))
    }, [rowCount,col])
    return (
        <div className="hints">
            <details>
                <summary>Random Hints</summary>
                <ol>
                    {hintList.map((val, key) => <li key={key}>{val ? val.word : 'n/a'}</li>)}
                </ol>
            </details>
        </div>
    )
}

export default Hints