import React from 'react'
import Keys from '../Keys/Keys'
import chars from './../../../../Assets/keysList.json';

function ChildKeys({ k,setWords }) {
  const changeKey = (k) => {
    setWords(k,true)
  }
  return (
    <div className="keyboard leave-space">
      {chars[k] ? chars[k].map((ky, key) => !!key && <Keys k={ky} key={key} changeKey={changeKey}/>):''}
    </div>
  )
}

export default ChildKeys