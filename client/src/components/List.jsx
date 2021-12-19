import React from 'react';
import Individual from './Individual.jsx';


const List = (props) => {
  return (
    <div> Collection of Cows
      <ul>
        {props.cows.map((item) => {
          return (
            <Individual cowName={item.name}/>
          )
        })}
      </ul>
    </div>
  )
}

export default List;