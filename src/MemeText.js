import React from 'react'
import Draggable from 'react-draggable';
import './Meme.css';

function MemeText(props) {
  return (
   <Draggable>
    <h2 className="meme--text">{props.text}</h2>
   </Draggable>
  )
}

export default MemeText;
