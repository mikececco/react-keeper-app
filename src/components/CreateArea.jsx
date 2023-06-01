import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

  function expand() {
    setExpanded(true)
  }

  return (
    <div>
      <form>
        { isExpanded? <input name="title" onChange={handleChange} value= {note.title} placeholder="Title" /> : null }
        <textarea name="content" onClick={expand} onChange={handleChange} value= {note.content} placeholder="Take a note..." rows={ isExpanded? 3:1 }/>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddBoxIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
