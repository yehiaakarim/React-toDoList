import React from "react";

function ToDoItem(props) {
  return (
    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{props.text}</span>
        <div style={{ display: "flex", gap: "8px", marginLeft: "8px" }}>
          <button onClick={() => props.onMoveUp(props.id)}>⬆️</button>
          <button onClick={() => props.onMoveDown(props.id)}>⬇️</button>
          <button
            onClick={() => props.onDelete(props.id)}
            style={{
              color: "red",
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "16px",
            }}
          >
            ❌
          </button>
        </div>
      </div>
    </li>
  );
}

export default ToDoItem;
