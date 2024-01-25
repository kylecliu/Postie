import React, { useState } from "react";
import AddCommentIcon from '@mui/icons-material/AddComment';
import Grow from '@mui/material/Grow';

function CreateArea(props) {
  function submit(event) {
    event.preventDefault();
  }

  const [isExpanded, setIsExpanded] = useState(false);

  function expand() {
    setIsExpanded(!isExpanded);
  }

  if (!isExpanded) {
    return (
      <div>
        <form className="create-note">
          <input type="text" placeholder="Add a note" onClick={expand} />
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={submit} className="create-note">
          <input
            name="title"
            placeholder="Title"
            onChange={(event) => props.newInput(event)}
            value={props.input.title}
          />
          <textarea
            name="content"
            placeholder="Take a note..."
            rows="3"
            onChange={(event) => props.newInput(event)}
            value={props.input.content}
          />
          <Grow in={isExpanded}
          style={{ transformOrigin: '0 0 0' }}
          {...(isExpanded ? { timeout: 1000 } : {})}>
          <button onClick={(event) => props.add(event)}><AddCommentIcon /></button>
          </Grow>        
        </form>
      </div>
    );
  }
}

export default CreateArea;
