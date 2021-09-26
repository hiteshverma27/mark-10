import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "✏": "pencil",
  "🛒": "shopping cart",
  "🎨": "artist pallet",
  "🏐": "Volleyball",
  "👓": "glasses",
  "🧦": "socks",
  "♟": "chess piece",
  "💻": "laptop",
  "📷": "camera",
  "⌚": "watch",
  "🚗": "car",
  "🏸": "Badminton",
  "🔔": "bell",
  "📺": "television",
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "oops! We don't seem to have this in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Daily life objects emoji interpreter</h1>
      <h2> Click on an Emoji or put one in the search box. </h2>
      <input onChange={emojiInputHandler} />
      <h2 style={{ color: "#4B5563" }}> {meaning} </h2>
      <hr />
      <h3> Find your Emoji! </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.8rem",
              cursor: "pointer",
              width: "auto"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}