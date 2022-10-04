import { useState } from "react";

export default function DisplayTodo({ title, description, author }) {

    return (
      <div>
        <p>--------------</p>
        <h3>Todo Title: {title}</h3>
        <div>What todo?: {description}</div>
        <br />
        <i>
        Written By: <b>{author}</b>
        </i>
        <form>
            <input type="checkbox" onChange={(event) => console.log(event.target.checked)}/>
        </form>
      </div>
    );
  }