import { useState } from "react";
import "./StudentCard.css";

function StudentCard({ name, course }) {
  const [message, setMessage] = useState("Hello!");

  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="course">{course}</p>
      <p>{message}</p>
      <button onClick={() => setMessage("React is fun!")}>
        Change Message
      </button>
    </div>
  );
}

export default StudentCard;
