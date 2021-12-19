import React from 'react';

const Individual = (props) => {

  let clickMe = () => {
    console.log('I am clickable');
  }

  return (
    <li>
      <a onClick={clickMe}>{props.cowName}</a>
    </li>
  )
}

export default Individual;