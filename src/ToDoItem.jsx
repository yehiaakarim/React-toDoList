import React, { useState, useEffect } from "react";

function ToDoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(props.text);

  useEffect(() => {
    setEditedText(props.text);
  }, [props.text]);

  const handleSave = () => {
    if (editedText.trim() !== "") {
      props.onEdit(props.id, editedText.trim());
      setIsEditing(false);
    }
  };

  return (
    <li style={{ listStyleType: "disc", marginBottom: "8px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            style={{ flexGrow: 1, marginRight: "8px", padding: "4px" }}
            autoFocus
          />
        ) : (
          <span>{props.text}</span>
        )}
        <div style={{ display: "flex", gap: "8px", marginLeft: "8px" }}>
          <button onClick={() => props.onMoveUp(props.id)}>⬆️</button>
          <button onClick={() => props.onMoveDown(props.id)}>⬇️</button>
          <button
            onClick={() => {
              if (isEditing) {
                handleSave();
              } else {
                setIsEditing(true);
              }
            }}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "16px",
            }}
          >
            {isEditing ? "💾" : "✏️"}
          </button>
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