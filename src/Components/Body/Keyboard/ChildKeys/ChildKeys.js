import React from 'react'
import Keys from '../Keys/Keys'
import chars from './../../../../Assets/keysList.json';

function ChildKeys({ k,setWords }) {
  return (
    <div className="keyboard leave-space">
      {chars[k] ? chars[k].map((ky, key) => <Keys k={ky} key={key} changeKey={setWords}/>):''}
    </div>
  )
}

export default ChildKeys