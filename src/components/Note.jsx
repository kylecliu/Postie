import React from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';


function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.delete(props.id)}><BackspaceIcon /></button>
    </div>
  );
}

export default Note;
