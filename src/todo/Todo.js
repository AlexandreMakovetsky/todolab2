import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo({ user, dispatch }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let [complete, setComplete] = useState(false);
  let [dateCompleted, setDateCompleted] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "CREATE_TODO",
          title,
          description,
          author: user,
          dateCreated: Date.now(),
          complete,
          dateCompleted,
          id: uuidv4(),
        });
      }}
    >
      <br></br>
      <div>
        <label htmlFor="create-title">Todo Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <br></br>
      <label htmlFor="create-description">What todo?:</label>
      <br></br>
      <textarea
       name="create-description"
       id="create-description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
       <br></br>
      <input type="submit" value="Create" disabled={title.length === 0}/>
    </form>
  );
}