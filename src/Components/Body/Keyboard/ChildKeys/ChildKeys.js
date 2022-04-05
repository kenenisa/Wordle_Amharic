import React from 'react'
import Keys from '../Keys/Keys'
import chars from './keysList.json';

function ChildKeys({ k }) {
  console.log(chars[k]);
  return (
    <div className="keyboard leave-space">
      {chars[k]?chars[k].map((ky,key) => <Keys k={ky} key={key}/>):''}
    </div>
  )
}

export default ChildKeys